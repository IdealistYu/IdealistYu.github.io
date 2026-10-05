# Yu's Site — 源码

[blog.loveyou.moe](https://blog.loveyou.moe/) 的 Hexo 源码。`dev` 分支是源码，`main` 分支是 CI 生成的静态站点（Vercel 与 GitHub Pages 从这里发布），不要手动修改 `main`。

## 环境

Node.js ≥ 20.19（CI 用 `.nvmrc` 中的版本），然后 `npm ci`。

## 写文章

```bash
npm run new -- "文章标题"      # 生成 source/_posts/文章标题.md 和同名图片目录
npm run server                 # 本地预览 http://localhost:4000
```

- front-matter：`title`、`date`、`categories`、`description`；默认 `comments: false`，需要评论时改为 `true`
- 首页摘要用 `<!-- more -->` 截断
- 图片放进同名目录，用 `![说明](图片.png)` 引用，说明文字会显示为图注
- 修改旧文章时可加 `updated: YYYY-MM-DD HH:mm:ss`，否则更新时间等于 `date`
- 草稿：`npm run new -- draft "标题"` 放在 `source/_drafts/`，`npx hexo publish "标题"` 转正

## 发布

```bash
git add -A && git commit -m "Add post: 标题" && git push
```

推送到 `dev` 后，GitHub Actions（`.github/workflows/deploy.yml`）会构建并把 `public/` 推到 `main`，Vercel 随后自动上线，通常一两分钟。向 `dev` 提 PR 只构建不发布；也可以在 Actions 页面手动运行。

## 结构

| 路径 | 说明 |
|---|---|
| `source/` | 文章、页面、图片 |
| `themes/next/` | 改过的 NexT 主题（模板、样式、配置都在这里改） |
| `scripts/` | 站点级 Hexo 过滤器 |
| `_config.yml` | 站点配置 |
| `vercel.json` | 关闭源码分支的 Vercel 预览构建 |
