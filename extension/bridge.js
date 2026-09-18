(() => {
  "use strict";

  // Chrome APIs are available only in this isolated world. The shared script
  // runs in MAIN so it can read X's React-owned DOM state.
  const CHANNEL = "x2img-extension-v1";
  const REQUEST_EVENT = "x2img-extension-request";
  const RESPONSE_EVENT = "x2img-extension-response";
  const FETCH_PORT = "x2img-media-fetch-v1";
  const MEDIA_HOSTS = [/(^|\.)twimg\.com$/i, /^ton\.twitter\.com$/i];
  const MAX_RESPONSE_BYTES = 80 * 1024 * 1024;
  const activeFetches = new Map();
  let requestNumber = 0;

  function requestId() {
    requestNumber += 1;
    return `${Date.now().toString(36)}-${requestNumber}-${Math.random().toString(36).slice(2)}`;
  }

  function sendToMain(type, payload) {
    const id = requestId();
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        document.removeEventListener(RESPONSE_EVENT, receive);
        reject(new Error("page-not-ready"));
      }, 2500);
      const receive = (event) => {
        const data = event.detail;
        if (data?.channel !== CHANNEL || data.id !== id || data.type !== type) return;
        clearTimeout(timer);
        document.removeEventListener(RESPONSE_EVENT, receive);
        resolve(data);
      };
      document.addEventListener(RESPONSE_EVENT, receive);
      document.dispatchEvent(
        new CustomEvent(REQUEST_EVENT, {
          detail: { channel: CHANNEL, id, type, ...payload },
        })
      );
    });
  }

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

  function respond(id, payload) {
    document.dispatchEvent(
      new CustomEvent(RESPONSE_EVENT, {
        detail: { channel: CHANNEL, id, ...payload },
      })
    );
  }

  function decodeChunk(value) {
    const binary = atob(String(value || ""));
    const bytes = new Uint8Array(binary.length);
    for (let index = 0; index < binary.length; index += 1) bytes[index] = binary.charCodeAt(index);
    return bytes;
  }

  function fetchMedia(data) {
    const url = mediaUrl(data.url);
    if (!url) return Promise.reject(new Error("blocked-url"));
    return new Promise((resolve, reject) => {
      const chunks = [];
      const port = chrome.runtime.connect({ name: FETCH_PORT });
      let received = 0;
      let settled = false;

      const finish = (error, result) => {
        if (settled) return;
        settled = true;
        activeFetches.delete(data.id);
        try {
          port.disconnect();
        } catch {
          /* already disconnected */
        }
        if (error) reject(error);
        else resolve(result);
      };

      port.onMessage.addListener((message) => {
        if (message?.id !== data.id || settled) return;
        if (message.type === "chunk") {
          try {
            const bytes = decodeChunk(message.data);
            received += bytes.byteLength;
            if (received > MAX_RESPONSE_BYTES) throw new Error("too-large");
            chunks.push(bytes);
          } catch (err) {
            try {
              port.postMessage({ type: "abort", id: data.id });
            } catch {
              /* port was already closed */
            }
            finish(err);
          }
          return;
        }
        if (message.type === "done") {
          finish(null, {
            type: "fetch",
            ok: true,
            status: Number(message.status) || 0,
            response: new Blob(chunks, { type: String(message.contentType || "") }),
            finalUrl: String(message.finalUrl || url.href),
          });
          return;
        }
        if (message.type === "error") finish(new Error(String(message.error || "network")));
      });

      port.onDisconnect.addListener(() => {
        if (!settled) finish(new Error(chrome.runtime.lastError?.message || "network"));
      });
      activeFetches.set(data.id, () => {
        try {
          port.postMessage({ type: "abort", id: data.id });
        } catch {
          /* port was already closed */
        }
        finish(new Error("aborted"));
      });
      try {
        port.postMessage({ type: "fetch", id: data.id, url: url.href });
      } catch (err) {
        finish(err);
      }
    });
  }

  document.addEventListener(REQUEST_EVENT, (event) => {
    const data = event.detail;
    if (data?.channel !== CHANNEL || !data.id) return;
    if (data.type === "fetch-abort") {
      activeFetches.get(data.id)?.();
      return;
    }
    if (data.type !== "fetch") return;
    fetchMedia(data)
      .then((result) => respond(data.id, result))
      .catch((err) => respond(data.id, { type: "fetch", ok: false, error: String(err?.message || err) }));
  });

  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message?.type === "x2img-menus") {
      sendToMain("menus")
        .then((data) => sendResponse(Array.isArray(data.titles) ? data.titles : []))
        .catch(() => sendResponse([]));
      return true;
    }
    if (message?.type === "x2img-menu") {
      sendToMain("menu", { index: Number(message.index) })
        .then((data) => sendResponse({ ok: Boolean(data.ok), error: data.error || "" }))
        .catch((err) => sendResponse({ ok: false, error: String(err?.message || err) }));
      return true;
    }
    return undefined;
  });
})();
