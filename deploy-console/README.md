# 网站一键更新控制台

让非技术的甲方也能零命令行更新网站：改完文件 → 点一下 → 线上自动更新。

## 原理
本地项目已初始化为 Git 仓库，并配好 GitHub 认证（复用全局 `.gitconfig` 中的 Authorization 头）。
远端 `Tero488/Next` 与 Vercel 绑定 —— **push 即自动部署**。

## 甲方每次更新的步骤
1. 在本地用编辑器改网站文件（`E:/Next-main/Next-main` 下的源码 / 图片）。
2. 启动控制台后端（只需一次）：
   ```
   node deploy-console/server.mjs
   ```
3. 浏览器打开 `http://localhost:5188` → 点「一键发布」。
4. 几秒后线上自动更新，全程不用碰命令行。

## 首次使用说明
- 首次运行需先 `git fetch` 把远端已有内容（约 550MB 图片资源）拉到本地一次，
  之后每次发布只是几 KB 的差量推送，极快。
- `git fetch` 在后台执行；完成后控制台里的「一键发布」即可正常工作。

## 文件说明
- `server.mjs` —— Node 后端，提供 `/api/status`（查看待发布改动）与 `/api/publish`（git push）接口。
- `index.html` —— 甲方操作的前端界面。
- 已固化为 WorkBuddy 自动化「网站一键更新工作流」，可在 WorkBuddy 里手动触发运行。
