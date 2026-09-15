---
name: X 贴文转图卡
description: 页内把 X 贴文做成可带走的 600px 图卡
colors:
  ink: "#1b1540"
  name: "#0e1c71"
  body: "#0f172a"
  mute: "#94a3b8"
  stat: "#64748b"
  entity: "#1d9bf0"
  card: "#ffffff"
  card-dark: "#15202b"
  canvas-from: "#a18cd1"
  canvas-to: "#fbc2eb"
  panel: "#fbfaff"
  shell: "#f7f4fb"
  accent: "#7c6bb8"
typography:
  card-name:
    fontFamily: "Outfit, TwitterChirp, PingFang SC, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    lineHeight: "28px"
  card-body:
    fontFamily: "Outfit, TwitterChirp, PingFang SC, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "24px"
  ui:
    fontFamily: "Outfit, PingFang SC, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: "1.4"
rounded:
  card: "16px"
  media: "12px"
  avatar: "12px"
  shell: "28px"
  chip: "999px"
spacing:
  canvas: "24px"
  card: "32px"
  gap: "16px"
components:
  download:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "14px"
    padding: "12px 14px"
  card-light:
    backgroundColor: "{colors.card}"
    textColor: "{colors.body}"
    rounded: "{rounded.card}"
---

## Overview

图卡是 600px 白底贴文卡，没有彩色外框和二维码。入口是贴文右上角的「图卡」胶囊角标，一点即出图。

## Colors

画布默认 `#a18cd1 → #fbc2eb`。姓名用 `#0e1c71`，正文 `#0f172a`，@与链接 `#1d9bf0`。深色卡是 `#15202b`，只在用户打开「深色卡片」时用。

## Typography

卡片优先 Outfit，X 页上回落到 TwitterChirp，中文走苹方 / 思源。不要把编辑器做成第二套展示字体。

## Layout

卡片固定 600px。头像 56px 在左，正文、媒体、互动在右栏。媒体按 1/2/3/4 张走 X 网格。页脚可关。编辑器桌面左预览右控件；窄屏上下叠，图卡按宽度缩放，导出前必须卸掉缩放。

## Elevation & Depth

白卡 `shadow-xl`：`0 20px 25px -5px rgb(0 0 0 / .1)`。编辑器壳再用一层更远的紫黑投影。不要给卡片描边。

## Shapes

卡片 16px，头像与媒体 12px，背景色点是圆。不要把头像做成正圆。

## Components

- 时间线上的入口是操作栏里一枚 34.75px 圆钮，悬停淡紫，不要做成大按钮。
- 背景是 6 个色点，按下态双圈。
- 显示项是带复选框的行。
- 主操作是「下载图片」，次操作是「复制图片」。

## Do's and Don'ts

- 做：导出 2x PNG，画布里的图先转 data URL。
- 做：开关即时改预览。
- 不要：把图卡做成整页截图或带浏览器铬的框。
- 不要：默认深色卡。紫粉底 + 白卡才是默认样张。
