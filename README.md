# X 贴文转图卡

刷 X 的时候经常想把一条帖丢进微信群，丢链接又经常打不开。我就在分享按钮旁边加了个图标：点一下出一张图，浅色深色跟着 X 走，直接粘贴。复制不了就下载。

<img src="docs/demo-light.jpg" width="280" alt="浅色图卡">
<img src="docs/demo-dark.jpg" width="280" alt="深色图卡">

引用、投票、链接卡片会带上。视频只能抓封面。时间线上折叠的正文会先试着展开；展不开会提醒你点进帖再出，不会默默出半截。

[Greasy Fork 上安装](https://greasyfork.org/zh-CN/scripts/595869-x-%E8%B4%B4%E6%96%87%E8%BD%AC%E5%9B%BE%E5%8D%A1)。先装 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)，再点安装，刷新 x.com。也可以直接打开 [`x-to-img.user.js`](https://github.com/icekale/x-to-img/raw/main/x-to-img.user.js)。

# X Post to Image Card

I got tired of pasting x.com links into chats that don't unfurl them. There's a small icon next to Share. Click it and you get a card on the clipboard, light or dark depending on the site.

Quotes, polls, and link previews come along. Video is just the poster. Collapsed timeline text is expanded when possible; otherwise it asks you to open the post.

[Install from Greasy Fork](https://greasyfork.org/en/scripts/595869). You'll need [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/). Or open [`x-to-img.user.js`](https://github.com/icekale/x-to-img/raw/main/x-to-img.user.js) directly.

本地看一眼：

```bash
python3 -m http.server 8765
```

http://127.0.0.1:8765/preview.html

MIT
