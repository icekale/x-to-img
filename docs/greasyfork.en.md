I made this because dropping an x.com link in a group chat usually does nothing useful. There's a small icon next to Share. Click it, get a card on the clipboard, paste it. Light if X is light, dark if X is dark. If the browser blocks the clipboard, it downloads a PNG instead.

![Light card](https://raw.githubusercontent.com/icekale/x-to-img/main/docs/demo-light.jpg)

![Dark card](https://raw.githubusercontent.com/icekale/x-to-img/main/docs/demo-dark.jpg)

It picks up the usual stuff — who posted, the text, photos, quotes, polls, link cards. Videos are just the thumbnail on the card. No gradient frame. The corner QR is this post's link.

If the timeline collapsed the text, it tries to expand first and tells you to open the post when it can't. Locked posts work if you can already see them. It just reads the page you're on.

The timeline extras, if you want them:

- **Hide adult spam, bait bots, and ads.** Strength, block words, and an allowlist are yours. Accounts you follow stay visible by default. Allowlisted handles aren't treated as spam, and their adult-content warnings come off too. Ads are the promoted ones — regular videos stay.
- **Download photos, videos, and GIFs.** Same toolbar as Share. Several files go into a ZIP. Name them with `{handle} {id} {name} {date} {n}`.
- **Photo grid** when a post has more than one image.
- **Lift age covers** on the post and the sensitive-profile prompt. This page only; it doesn't change your X account settings. The video stays put.
- **Reading spotlight.** A band over the live timeline, on the current lines. Everything else just loses contrast — no cover, no blur. Drag it, click a sentence, or press F to follow the pointer. Alt+S toggles it.

Open **Settings** from the userscript menu.

Install [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/), then hit **Install this script** on this page and refresh x.com.

https://github.com/icekale/x-to-img
