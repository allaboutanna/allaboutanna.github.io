# 网页后台版：首次上线步骤

## 你以后怎么写内容

上线完成后，日常写作不需要 VS Code。

1. 打开 Pages CMS 的托管后台：https://app.pagescms.org/
2. 使用 GitHub 登录。
3. 选择你的网站仓库。
4. 左侧会看到：
   - Academic Thinking
   - Research Progress
   - Projects
   - Reading
   - About
5. 点击某个模块后：
   - New：新增内容
   - 点击已有条目：修改
6. 填写 Title、Date、Summary、Tags、Status 和 Content。
7. 保存。

Pages CMS 会直接把内容写回 GitHub 仓库中的 Markdown 文件。
GitHub 随即触发 `.github/workflows/deploy.yml`，重新构建并发布网站。

## 第一次部署仍然需要做一次 GitHub 设置

### A. 创建 GitHub 仓库

最省事的仓库名：

`你的GitHub用户名.github.io`

例如你的 GitHub 用户名是 `haoyu123`：

`haoyu123.github.io`

这样网站地址天然就是：

`https://haoyu123.github.io/`

而且不用处理 GitHub Pages 的子目录 `base`。

### B. 上传本项目

把本 ZIP 解压后的 **文件夹里面的所有文件** 上传到仓库根目录。

注意 `.pages.yml` 和 `.github/` 都是必要文件。

### C. 开启 GitHub Pages

GitHub 仓库：

Settings → Pages → Source → GitHub Actions

之后每次 Pages CMS 保存文章，GitHub Action 会自动部署。

### D. 连接 Pages CMS

打开：

https://app.pagescms.org/

然后：

1. Sign in with GitHub
2. Install / authorize Pages CMS GitHub App
3. 允许它访问你的网站仓库
4. 选择仓库
5. Pages CMS 会读取仓库根目录的 `.pages.yml`
6. 开始在浏览器里写内容

## 网页后台中的字段

### Academic Thinking

- Title
- Published date
- Last updated
- Homepage summary
- Tags
- Status
- Featured
- Manual order
- Draft
- Content

### Research Progress

和 Academic Thinking 类似，额外强调 Status，例如：

- Idea
- Analysis
- Writing
- Revision
- Submitted
- Published

### Projects

Status 例如：

- Building
- Active
- Paused
- Completed

### Reading

Status 例如：

- Reading
- Finished
- Re-reading
- On hold

### About

About 是单一固定文件，因此不会误创建多个 About 页面。

## Draft 的行为

`Draft = true`：

- 本地开发模式仍可看到
- 正式 GitHub Pages 构建时不会显示

适合先写、暂时不公开的内容。

## 图片

后台可以使用 `public/uploads/` 存放图片。

发布后公共路径是：

`/uploads/文件名`

## 自定义域名

建议先让 `username.github.io` 正常上线。
等网站设计与内容稳定后再绑定自己的域名。
