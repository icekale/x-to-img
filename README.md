# X 贴文转图卡

刷 X 的时候经常想把一条帖丢进微信群，丢链接又经常打不开。我就在分享按钮旁边加了个图标：点一下出一张图，默认浅色深色跟着 X 走，设置里也能锁浅色或深色。直接粘贴。复制不了就下载。

<img src="docs/demo-light.jpg" width="280" alt="浅色图卡">
<img src="docs/demo-dark.jpg" width="280" alt="深色图卡">

图上是帖子本身：谁发的、写了什么、配图、引用、投票、链接卡片。视频在图卡上是封面。没有渐变框。右下角是这条帖的二维码。

时间线上折叠的正文会先试着展开；展不开会提醒你点进帖再出，不会默默出半截。私密帖只要你自己看得见就能出。脚本只读当前页。

时间线也顺手管了：

- **藏黄推、引流机器人和广告。** 强度、屏蔽词、白名单自己定。已关注的默认不藏。白名单里的号不当黄推藏，成人内容提示也会揭开。广告按推广标来认，普通视频不会被误伤。
- **一键下原图、视频、GIF。** 分享旁边那个下载按钮，没媒体的帖不出现。多个文件打成 ZIP，文件名能写 `{handle} {id} {name} {date} {n}`。
- **多图排成网格。**
- **揭开年龄遮罩。** 帖里的成人内容提示、个人资料敏感页，只在当前页拿掉，不改你的 X 账号设置。片子还在。
- **整页聚光。** 左侧栏「更多」上面进入，光带跟当前帖走，周围用纸色压对比，不遮、不虚化。点赞、进帖都还能用。七张纸、长帖开窗、跟随都能改，浅色深色分开记。j/k 换帖，Shift 点帖对准，F 跟随。Alt+S 也能开。

左侧栏「更多」上面有齿轮，改完立刻生效。油猴菜单里也有「设置」。图卡颜色、二维码、互动数都在里面。

[Greasy Fork 上安装](https://greasyfork.org/zh-CN/scripts/595869-x-%E8%B4%B4%E6%96%87%E8%BD%AC%E5%9B%BE%E5%8D%A1)。先装 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)，再点安装，刷新 x.com。也可以直接打开 [`x-to-img.user.js`](https://github.com/icekale/x-to-img/raw/main/x-to-img.user.js)。

# X Post to Image Card

I got tired of pasting x.com links into chats that don't unfurl them. There's a small icon next to Share. Click it and you get a card on the clipboard. Light or dark follows X unless you lock it in Settings. If the clipboard is blocked, it downloads a PNG.

It picks up who posted, the text, photos, quotes, polls, and link cards. Videos are just the thumbnail on the card. No gradient frame. The corner QR is this post's link.

Collapsed timeline text is expanded when possible; otherwise it asks you to open the post. Locked posts work if you can already see them. It just reads the page you're on.

Also on the timeline:

- **Hide adult spam, bait bots, and ads.** Strength, block words, allowlist. Accounts you follow stay visible by default. Allowlisted handles aren't treated as spam, and their adult-content warnings come off too. Ads are the promoted ones.
- **Download photos, videos, and GIFs.** The download icon only shows when the post has media. ZIP when there's more than one file. Names can use `{handle} {id} {name} {date} {n}`.
- **Photo grid** for multi-image posts.
- **Lift age covers** and the sensitive-profile prompt on this page only. The video stays put.
- **Whole-page spotlight.** Enter it above More in the left rail. The band hugs the current post; everything else drops to a paper veil — no cover, no blur. Likes and opening a post still work. Seven papers, a long-post window, and follow are in Settings; light and dark are remembered separately. Use j/k to move posts, Shift-click to pin one, or F to follow. Alt+S toggles it.

There's a gear above More in the left rail; changes apply immediately. Settings are also in the userscript menu. Card color, QR, and stats live there.

[Install from Greasy Fork](https://greasyfork.org/en/scripts/595869). You'll need [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/). Or open [`x-to-img.user.js`](https://github.com/icekale/x-to-img/raw/main/x-to-img.user.js) directly.

本地看一眼：

```bash
python3 -m http.server 8765
```

http://127.0.0.1:8765/preview.html

MIT
