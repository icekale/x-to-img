On [X](https://x.com) (Twitter) timelines and status pages, a photo icon appears **next to the native Share button**. One click copies a clean image card to the clipboard so you can paste it into WeChat, iMessage, Slack, or any chat that does not embed X posts. If clipboard access is blocked, the script downloads a PNG instead.

## Features

- One click on the post itself — no copying links into a third-party site
- White 600px card: no colorful frame, no QR code
- Keeps avatar, name, verification, text, photos, video posters, quotes, link previews, polls, and stats
- Export library is bundled, so generation does not depend on jsDelivr
- If a timeline post is truncated, the script still works and asks you to open the status page for the full text
- Private posts can be exported as long as you can see them

The script reads the post from the page you already have open. It does not send the tweet to a scraping API.

## Usage

1. Install [Tampermonkey](https://www.tampermonkey.net/) or [Violentmonkey](https://violentmonkey.github.io/)
2. Click **Install this script** on this page
3. Open or refresh `https://x.com`
4. Click the photo icon beside Share; paste into chat after you see the copied toast

## Source

https://github.com/icekale/x-to-img
