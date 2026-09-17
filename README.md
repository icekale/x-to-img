# X 贴文转图卡

刷 X 的时候经常想把一条帖丢进微信群，丢链接又经常打不开。我就在分享按钮旁边加了个图标：点一下出一张图，浅色深色跟着 X 走，直接粘贴。复制不了就下载。

<img src="docs/demo-light.jpg" width="280" alt="浅色图卡">
<img src="docs/demo-dark.jpg" width="280" alt="深色图卡">

图上是帖子本身：谁发的、写了什么、配图、引用、投票、链接卡片。视频在图卡上是封面。没有渐变框。右下角是这条帖的二维码。

时间线上折叠的正文会先试着展开；展不开会提醒你点进帖再出，不会默默出半截。私密帖只要你自己看得见就能出。脚本只读当前页。

时间线也顺手管了：

- **藏黄推、引流机器人和广告。** 强度、屏蔽词、白名单自己定。已关注的默认不藏。白名单里的号不当黄推藏，成人内容提示也会揭开。广告按推广标来认，普通视频不会被误伤。
- **一键下原图、视频、GIF。** 分享旁边那个下载按钮。多个文件打成 ZIP，文件名能写 `{handle} {id} {name} {date} {n}`。
- **多图排成网格。**
- **揭开年龄遮罩。** 帖里的成人内容提示、个人资料敏感页，只在当前页拿掉，不改你的 X 账号设置。片子还在。
- **阅读光带。** 长帖或线程点一下，窄栏重排，光带盯着当前几行。周围只降对比，不遮、不虚化。可拖、可点一句、按 F 跟随。Alt+S 也能开。

油猴菜单里有「设置」。

[Greasy Fork 上安装](https://greasyfork.org/zh-CN/scripts/595869-x-%E8%B4%B4%E6%96%87%E8%BD%AC%E5%9B%BE%E5%8D%A1)。先装 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)，再点安装，刷新 x.com。也可以直接打开 [`x-to-img.user.js`](https://github.com/icekale/x-to-img/raw/main/x-to-img.user.js)。

# X Post to Image Card

I got tired of pasting x.com links into chats that don't unfurl them. There's a small icon next to Share. Click it and you get a card on the clipboard, light or dark depending on the site. If the clipboard is blocked, it downloads a PNG.

It picks up who posted, the text, photos, quotes, polls, and link cards. Videos are just the thumbnail on the card. No gradient frame. The corner QR is this post's link.

Collapsed timeline text is expanded when possible; otherwise it asks you to open the post. Locked posts work if you can already see them. It just reads the page you're on.

Also on the timeline:

- **Hide adult spam, bait bots, and ads.** Strength, block words, allowlist. Accounts you follow stay visible by default. Allowlisted handles aren't treated as spam, and their adult-content warnings come off too. Ads are the promoted ones.
- **Download photos, videos, and GIFs.** ZIP when there's more than one file. Names can use `{handle} {id} {name} {date} {n}`.
- **Photo grid** for multi-image posts.
- **Lift age covers** and the sensitive-profile prompt on this page only. The video stays put.
- **Reading spotlight.** Long posts and threads open in a narrow column with a band on the current lines. Everything else just loses contrast — no cover, no blur. Drag it, click a sentence, or press F to follow the pointer. Alt+S toggles it.

Settings are in the userscript menu.

[Install from Greasy Fork](https://greasyfork.org/en/scripts/595869). You'll need [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/). Or open [`x-to-img.user.js`](https://github.com/icekale/x-to-img/raw/main/x-to-img.user.js) directly.

本地看一眼：

```bash
python3 -m http.server 8765
```

http://127.0.0.1:8765/preview.html

MIT
