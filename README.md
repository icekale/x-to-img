# X 贴文转图卡

刷 X 的时候经常想把一条帖丢进微信群，丢链接又经常打不开。我就在分享按钮旁边加了个图标：点一下出一张白底的图，直接粘贴。复制不了就下载。

引用、投票、链接卡片会带上。视频只能抓封面。时间线上如果是「显示更多」，最好点进帖子再出图，不然正文是截断的。

[Greasy Fork 上安装](https://greasyfork.org/zh-CN/scripts/595869-x-%E8%B4%B4%E6%96%87%E8%BD%AC%E5%9B%BE%E5%8D%A1)。先装 [Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)，再点安装，刷新 x.com。也可以直接打开 [`x-to-img.user.js`](https://github.com/icekale/x-to-img/raw/main/x-to-img.user.js)。

# X Post to Image Card

I got tired of pasting x.com links into chats that don't unfurl them. There's a small icon next to Share. Click it and you get a plain white card on the clipboard.

Quotes, polls, and link previews come along. Video is just the poster. If the timeline collapsed the text, open the post first.

[Install from Greasy Fork](https://greasyfork.org/en/scripts/595869). You'll need [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/). Or open [`x-to-img.user.js`](https://github.com/icekale/x-to-img/raw/main/x-to-img.user.js) directly.

本地看一眼：

```bash
python3 -m http.server 8765
```

http://127.0.0.1:8765/preview.html

MIT
