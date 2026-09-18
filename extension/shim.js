(() => {
  "use strict";

  // This file runs in the page's MAIN world. bridge.js runs in Chrome's
  // isolated world and supplies the two extension-only capabilities below.
  const CHANNEL = "x2img-extension-v1";
  const REQUEST_EVENT = "x2img-extension-request";
  const RESPONSE_EVENT = "x2img-extension-response";
  const menus = [];
  let requestNumber = 0;

  function requestId() {
    requestNumber += 1;
    return `${Date.now().toString(36)}-${requestNumber}-${Math.random().toString(36).slice(2)}`;
  }

  function respond(id, payload) {
    document.dispatchEvent(
      new CustomEvent(RESPONSE_EVENT, {
        detail: { channel: CHANNEL, id, ...payload },
      })
    );
  }

  function GM_addStyle(css) {
    const style = document.createElement("style");
    style.textContent = String(css || "");
    (document.head || document.documentElement).appendChild(style);
    return style;
  }

  function GM_getValue(key, fallback) {
    try {
      const raw = localStorage.getItem(String(key));
      return raw == null ? fallback : raw;
    } catch {
      return fallback;
    }
  }

  function GM_setValue(key, value) {
    try {
      localStorage.setItem(String(key), String(value));
    } catch {
      /* private mode */
    }
  }

  function GM_registerMenuCommand(title, fn) {
    menus.push({ title: String(title || ""), fn });
    return menus.length;
  }

  function GM_xmlhttpRequest(details) {
    const req = details || {};
    const id = requestId();
    let timer = 0;
    let ended = false;

    const finish = () => {
      if (ended) return false;
      ended = true;
      document.removeEventListener(RESPONSE_EVENT, onResponse);
      if (timer) clearTimeout(timer);
      return true;
    };
    const cancelFetch = () => {
      document.dispatchEvent(
        new CustomEvent(REQUEST_EVENT, {
          detail: { channel: CHANNEL, id, type: "fetch-abort" },
        })
      );
    };

    const onResponse = (event) => {
      const data = event.detail;
      if (data?.channel !== CHANNEL || data.id !== id || data.type !== "fetch") return;
      if (!finish()) return;
      if (!data.ok) {
        req.onerror?.(data.error || new Error("network"));
        return;
      }
      req.onload?.({
        status: Number(data.status) || 0,
        response: data.response,
        responseText: typeof data.response === "string" ? data.response : "",
        finalUrl: data.finalUrl || req.url,
      });
    };

    document.addEventListener(RESPONSE_EVENT, onResponse);
    const timeout = Number(req.timeout);
    if (Number.isFinite(timeout) && timeout > 0) {
      timer = window.setTimeout(() => {
        if (finish()) {
          cancelFetch();
          req.ontimeout?.(new Error("timeout"));
        }
      }, timeout);
    }
    document.dispatchEvent(
      new CustomEvent(REQUEST_EVENT, {
        detail: {
          channel: CHANNEL,
          id,
          type: "fetch",
          url: String(req.url || ""),
          responseType: req.responseType || "text",
        },
      })
    );
    return {
      abort() {
        if (finish()) {
          cancelFetch();
          req.onabort?.(new Error("aborted"));
        }
      },
    };
  }

  document.addEventListener(REQUEST_EVENT, (event) => {
    const data = event.detail;
    if (data?.channel !== CHANNEL || !data.id) return;
    if (data.type === "menus") {
      respond(data.id, { type: "menus", ok: true, titles: menus.map((item) => item.title) });
      return;
    }
    if (data.type !== "menu") return;
    const item = menus[Number(data.index)];
    try {
      item?.fn?.();
      respond(data.id, { type: "menu", ok: Boolean(item) });
    } catch (err) {
      respond(data.id, { type: "menu", ok: false, error: String(err?.message || err) });
    }
  });

  globalThis.GM_addStyle = GM_addStyle;
  globalThis.GM_getValue = GM_getValue;
  globalThis.GM_setValue = GM_setValue;
  globalThis.GM_registerMenuCommand = GM_registerMenuCommand;
  globalThis.GM_xmlhttpRequest = GM_xmlhttpRequest;
  globalThis.unsafeWindow = window;
})();
