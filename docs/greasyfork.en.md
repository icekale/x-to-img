I made this because dropping an x.com link in a group chat usually does nothing useful. There's a small icon next to Share. Click it, get a card on the clipboard, paste it. Light or dark follows X unless you lock it in Settings. If the browser blocks the clipboard, it downloads a PNG instead.

![Light card](https://raw.githubusercontent.com/icekale/x-to-img/main/docs/demo-light.jpg)

![Dark card](https://raw.githubusercontent.com/icekale/x-to-img/main/docs/demo-dark.jpg)

It picks up the usual stuff — who posted, the text, photos, quotes, polls, link cards. Videos are just the thumbnail on the card. No gradient frame. The corner QR is this post's link.

If the timeline collapsed the text, it tries to expand first and tells you to open the post when it can't. Locked posts work if you can already see them. It just reads the page you're on.

The timeline extras, if you want them:

- **Hide adult spam, bait bots, and ads.** Strength, block words, and an allowlist are yours. Accounts you follow stay visible by default. Allowlisted handles aren't treated as spam, and their adult-content warnings come off too. Ads are the promoted ones — regular videos stay.
- **Download photos, videos, and GIFs.** Same toolbar as Share, only when the post has media. Several files go into a ZIP. Name them with `{handle} {id} {name} {date} {n}`.
- **Photo grid** when a post has more than one image.
- **Lift age covers** on the post and the sensitive-profile prompt. This page only; it doesn't change your X account settings. The video stays put.
- **Whole-page spotlight.** Enter it above More in the left rail. The band hugs the current post; everything else drops to a paper veil — no cover, no blur. Likes and opening a post still work. Seven papers, a long-post window, and follow are in Settings; light and dark are remembered separately. Use j/k to move posts, Shift-click to pin one, or F to follow. Alt+S toggles it.

Settings live in the userscript menu or the extension icon; a long-press on Spotlight in the left rail also opens them. Changes apply immediately. Card color, QR, and stats live there.

Install [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/), then hit **Install this script** on this page and refresh x.com.

https://github.com/icekale/x-to-img
