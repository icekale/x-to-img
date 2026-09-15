# X 贴文转图卡 / X Post to Image Card

[English](#x-post-to-image-card) · [中文](#x-贴文转图卡)

在 [X](https://x.com) 时间线或贴文详情里，每条贴文的分享按钮旁边会出现一枚图片图标。点一下，图卡会复制到剪贴板，直接去微信、微博或其它聊天软件粘贴。复制失败时才会改为下载。

On [X](https://x.com), a photo icon appears next to the native Share button. One click copies a clean image card to the clipboard so you can paste it into chat apps. If copying fails, the script downloads a PNG instead.

## 安装 / Install

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)
2. 打开本仓库的 [`x-to-img.user.js`](https://github.com/icekale/x-to-img/raw/main/x-to-img.user.js)，浏览器扩展会提示安装
3. 刷新 `https://x.com`

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/)
2. Open [`x-to-img.user.js`](https://github.com/icekale/x-to-img/raw/main/x-to-img.user.js) and confirm the install prompt
3. Refresh `https://x.com`

Greasy Fork 安装页发布后会补到这里。

## X 贴文转图卡

图卡保留贴文本身的排版：头像、姓名、认证、正文、图片、视频封面、引用、链接预览、投票和互动数。没有彩色外框，也没有二维码。导出库已打进脚本，不依赖 jsDelivr。

时间线上被折叠的长贴文可能只有半截正文。打开详情再点，能拿到全文。私密贴文只要你自己能看见，就可以导出。

## X Post to Image Card

The card keeps the post’s own layout: avatar, name, verification, text, photos, video posters, quotes, link previews, polls, and stats. No colorful frame, no QR code. The export library is bundled, so it does not depend on jsDelivr.

Timeline posts that show “Show more” may be truncated. Open the status page and click again for the full text. Private posts work as long as you can see them.

## 本地预览 / Local preview

```bash
python3 -m http.server 8765
```

Open http://127.0.0.1:8765/preview.html

## License

MIT
