# X 贴文转图卡 Chrome 扩展

这是油猴脚本的 Chrome / Edge / Arc 未打包版本（Chromium 111+），不需要 Tampermonkey。这个文件夹已带当前脚本和图标；不要和油猴版同时启用。

打开 `chrome://extensions`（Edge：`edge://extensions`），启用「开发者模式」，点「加载已解压的扩展程序」，选择这个 `extension/` 文件夹。

打开或刷新 X。贴文旁的图卡与媒体下载按钮、左栏的聚光都会出现；扩展工具栏图标提供「设置」「聚光」「将当前贴文转成图卡」。长按左栏「聚光」也能开设置。

开发时每次更新仓库里的 `x-to-img.user.js` 后，重新运行 `./extension/prepare.sh`（会同步版本、生成图标并检查脚本），然后在扩展管理页点刷新。

目前是本地加载版本，尚未发布到 Chrome Web Store。
