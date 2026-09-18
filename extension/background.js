const FETCH_PORT = "x2img-media-fetch-v1";
const MAX_RESPONSE_BYTES = 80 * 1024 * 1024;
const CHUNK_BYTES = 192 * 1024;
const MEDIA_HOSTS = [/(^|\.)twimg\.com$/i, /^ton\.twitter\.com$/i];

function mediaUrl(raw) {
  try {
    const url = new URL(String(raw || ""));
    return url.protocol === "https:" && !url.username && !url.password && MEDIA_HOSTS.some((re) => re.test(url.hostname))
      ? url
      : null;
  } catch {
    return null;
  }
}

function encodeChunk(bytes) {
  let binary = "";
  for (let start = 0; start < bytes.length; start += 0x8000) {
    binary += String.fromCharCode(...bytes.subarray(start, start + 0x8000));
  }
  return btoa(binary);
}

async function streamResponse(port, id, rawUrl, controller) {
  const url = mediaUrl(rawUrl);
  if (!url) throw new Error("blocked-url");
  const response = await fetch(url.href, {
    method: "GET",
    credentials: "omit",
    cache: "no-store",
    signal: controller.signal,
  });
  if (!mediaUrl(response.url)) throw new Error("blocked-redirect");
  const length = Number(response.headers.get("content-length"));
  if (Number.isFinite(length) && length > MAX_RESPONSE_BYTES) throw new Error("too-large");

  let received = 0;
  const reader = response.body?.getReader();
  if (reader) {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      received += value.byteLength;
      if (received > MAX_RESPONSE_BYTES) {
        controller.abort();
        throw new Error("too-large");
      }
      for (let start = 0; start < value.byteLength; start += CHUNK_BYTES) {
        port.postMessage({ type: "chunk", id, data: encodeChunk(value.subarray(start, start + CHUNK_BYTES)) });
      }
    }
  }
  port.postMessage({
    type: "done",
    id,
    status: response.status,
    contentType: response.headers.get("content-type") || "",
    finalUrl: response.url,
  });
}

chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== FETCH_PORT) return;
  let active = null;

  port.onMessage.addListener((message) => {
    if (message?.type === "abort" && active?.id === message.id) {
      active.controller.abort();
      return;
    }
    if (message?.type !== "fetch" || active || !message.id) return;
    const controller = new AbortController();
    active = { id: message.id, controller };
    streamResponse(port, message.id, message.url, controller)
      .catch((err) => {
        if (!controller.signal.aborted) {
          try {
            port.postMessage({ type: "error", id: message.id, error: String(err?.message || err) });
          } catch {
            /* receiver closed the port */
          }
        }
      })
      .finally(() => {
        active = null;
      });
  });

  port.onDisconnect.addListener(() => active?.controller.abort());
});
