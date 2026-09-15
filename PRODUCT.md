# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Tampermonkey / Violentmonkey userscript（用户指定油猴脚本，在 x.com / twitter.com 页内运行，无后端）

## Users

在 X 上读到想转发的贴文、却要把内容带到微信、微博或即时通讯里的人。他们已经登录 X，不想再复制链接去第三方网站抓取。

## Product Purpose

把当前页面上的贴文一键做成可下载、可复制的图卡，方便在不支持 X 嵌入的平台分享。成功标准：从时间线或贴文详情点一下，就能导出一张 600px 宽、内容完整的 PNG。

## Positioning

脚本跑在 X 页内，直接读 DOM，不请求第三方抓取接口，也不受公开/登录墙的抓取失败影响（私密贴文只要用户自己能看见就能导出）。

## Operating Context

Chrome / Arc / Edge + Tampermonkey 或 Violentmonkey。用户停留在 x.com 时间线或 `/status/` 详情。导出目标主要是微信会话和群。

## Capabilities and Constraints

- 在每条贴文分享按钮旁注入 X 风格图片图标，点一下即生成图卡
- 优先把 PNG 写入剪贴板，方便直接粘贴到微信；复制失败才下载
- 从 DOM 读取作者、正文、图片、视频封面、引用、链接预览、投票、时间、互动数
- 图卡为 600px 白卡片（无彩色外框、无二维码）
- 无后端；头像与媒体经脚本请求转成 data URL
- 假设：暂不做长线程拼图、视频逐帧、编辑器微调

## Brand Commitments

图卡样式绑定 z.tools「推文转图片」的默认样张（紫粉渐变底、白卡片、Outfit/系统黑体、页脚「在 X 上查看」+ QR）。编辑器是页内工具层，不另起品牌站。

## Evidence on Hand

- z.tools 线上样张：Heisenberg 演示卡，600×705，渐变 `from #a18cd1 to #fbc2eb`，卡片 `rounded-2xl bg-white shadow-xl`
- 仓库内无真实用户贴文资产；预览页使用标明的演示数据

## Product Principles

1. 人已经在贴文旁边，就不要让他们再去别处粘贴链接
2. 导出的图必须像一张认真排过的卡，而不是网页截图
3. 开关只影响画面，不增加理解成本
4. 第三方站点抓不到的贴文，只要页上看得见，这里就要出得来
