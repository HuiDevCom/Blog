<div align="center">

<img src="./public/avatar.png" width="88" height="88" alt="风绘头像" />

# HuiDev Notes

**风绘笔记 · 记录学习、折腾与日常。**

欲买桂花同载酒，终不似，少年游。

[访问博客](https://huidev.com/) · [关于风绘](https://huidev.com/about/) · [联系我](mailto:fenghui@huidev.com)

![Node.js >= 22.12](https://img.shields.io/badge/Node.js-%3E%3D22.12-5FA04E?logo=nodedotjs&logoColor=white)
![pnpm 11.28.2](https://img.shields.io/badge/pnpm-11.28.2-F69220?logo=pnpm&logoColor=white)
![Astro 7](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)
[![License: MIT](https://img.shields.io/badge/License-MIT-3DA639.svg)](./LICENSE)

</div>

![风绘笔记横幅](./public/banner.png)

<table>
  <tr>
    <td align="center"><strong>笔记与日常</strong><br><sub>用 Markdown 与 MDX 留下学习过程和生活片刻。</sub></td>
    <td align="center"><strong>配色与阅读</strong><br><sub>动态配色、明暗主题与流光等高线背景。</sub></td>
  </tr>
  <tr>
    <td align="center"><strong>兴趣与收藏</strong><br><sub>记录番剧、游戏、设备、项目与一路走来的节点。</sub></td>
    <td align="center"><strong>音乐与交流</strong><br><sub>听听歌，逛逛友链，也欢迎在评论里聊聊。</sub></td>
  </tr>
</table>

## ✦ 关于小站

这里是风绘的个人博客源码仓库。小站于 **2026 年 6 月 15 日**上线，用来记录前端学习、网站与服务的折腾，以及日常见闻。

基于 [Shirone](https://github.com/LyraVoid/Shirone) 主题，使用 Astro 7、Svelte 5、Tailwind CSS 4 与 Stylus，采用 Material 3 Expressive 设计。本站已接入 Twikoo 评论、Umami 统计、B 站番剧列表，以及本地音乐与网易云歌单的混合播放。

## ✦ 本地运行

需要 **Node.js 22.12+** 和 **pnpm 11.28.2**。

```bash
git clone https://github.com/HuiDevCom/Blog.git
cd Blog
corepack enable
pnpm install --frozen-lockfile
pnpm dev
```

访问 `http://localhost:4321`。Windows PowerShell 下可使用 `pnpm.cmd` 替代 `pnpm`。

## ✦ 内容与配置

| 目录 | 内容 |
| --- | --- |
| [`src/content/posts/`](./src/content/posts/) | Markdown / MDX 文章 |
| [`src/content/moments/`](./src/content/moments/) | 日常动态 |
| [`src/data/`](./src/data/) | 友链、项目、技能、设备、游戏和时间线 |
| [`src/config/`](./src/config/) | 站点资料、主题、导航与功能配置 |
| [`public/`](./public/) | 头像、横幅、图标等静态资源 |

创建文章：`pnpm new-post <filename>`。配置说明见 [`src/config/README.md`](./src/config/README.md)，写作语法见 [主题文档](https://docs.shirone.mysqil.com/)。

## ✦ 常用命令

| 命令 | 用途 |
| --- | --- |
| `pnpm dev` | 启动本地开发服务器 |
| `pnpm check` | 检查 Astro 类型与内容 |
| `pnpm anime:sync --provider bilibili` | 更新 B 站番剧快照与封面 |
| `pnpm build` | 构建网站与搜索索引，输出到 `dist/` |
| `pnpm preview` | 预览生产构建 |

番剧快照和下载封面不随 Git 提交，首次构建或更新追番列表时，请先运行番剧同步命令。部署时使用 `pnpm build`，发布目录为 `dist`。

## ✦ 致谢与许可

感谢 [Shirone](https://github.com/LyraVoid/Shirone) 及其原始基础 [Fuwari](https://github.com/saicaca/fuwari) 的作者和贡献者。

主题代码遵循 [MIT License](./LICENSE)，保留原作者版权声明。
