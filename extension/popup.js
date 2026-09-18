const ON_X = /^https:\/\/((www|mobile)\.)?(x|twitter)\.com\//i;

async function activeTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  return tab || null;
}

async function boot() {
  const hint = document.querySelector("[data-hint]");
  const root = document.getElementById("menus");
  const tab = await activeTab();
  if (!tab?.id || !ON_X.test(tab.url || "")) {
    document.body.dataset.err = "1";
    hint.textContent = "先打开 x.com，再点这里。";
    return;
  }
  let titles = [];
  try {
    titles = await chrome.tabs.sendMessage(tab.id, { type: "x2img-menus" });
  } catch {
    titles = [];
  }
  if (!Array.isArray(titles) || !titles.length) {
    document.body.dataset.err = "1";
    hint.textContent = "页面还没准备好，刷新 x.com 再试。";
    return;
  }
  titles.forEach((title, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = index ? "ghost" : "";
    btn.textContent = title;
    btn.addEventListener("click", async () => {
      try {
        const result = await chrome.tabs.sendMessage(tab.id, { type: "x2img-menu", index });
        if (!result?.ok) throw new Error(result?.error || "page-not-ready");
        window.close();
      } catch {
        document.body.dataset.err = "1";
        hint.textContent = "页面还没准备好，刷新 x.com 再试。";
      }
    });
    root.appendChild(btn);
  });
}

boot();
