# Modular Personal Site + Pages CMS

一个单页、模块化、静态的个人网站，同时支持浏览器后台编辑。

## Public website

主页只有五个内容模块：

- ACADEMIC THINKING
- RESEARCH PROGRESS
- PROJECTS
- READING
- ABOUT

没有导航栏。模块固定尺寸、底部渐隐、More 弹层、文章弹层、跨模块 Tag 过滤均已实现。

## Browser editing

Pages CMS 配置文件位于：

`.pages.yml`

它把浏览器编辑器映射到：

- `src/content/entries/academic/`
- `src/content/entries/research/`
- `src/content/entries/projects/`
- `src/content/entries/reading/`
- `src/content/entries/about/about.md`

正文使用 Markdown 格式保存。

## Daily workflow after setup

```text
Pages CMS in browser
        ↓
Write / edit / add tags
        ↓
Save
        ↓
Markdown committed to GitHub
        ↓
GitHub Actions
        ↓
Astro static build
        ↓
Public website updates
```

## First setup

请优先阅读：

`SETUP-CMS-中文说明.md`

## Local preview（可选）

日常使用与第一次上线都不需要本地运行代码。只有以后你想自己修改网站设计时，才需要本地开发环境。

## Important

最简单的 GitHub Pages 部署方式是把仓库命名为：

`<your-github-username>.github.io`

这样当前项目中的根路径资源 `/styles`、`/scripts` 和 `/uploads` 都可直接工作。

如果之后使用普通项目仓库名（例如 `personal-site`），需要额外配置 Astro `base` 并调整根路径资源；建议初次不要走这条路线。
