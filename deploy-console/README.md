# 网站更新控制台（拖拽发布版）

让**完全不懂技术**的甲方也能更新网站：把案例图拖进网页、填个标题、点一下，
剩下的「转图 + 写文件 + 改数据 + 推送 GitHub + 触发部署」全自动，全程不用碰命令行。

## 甲方每次怎么发一个新案例（核心用法）
1. 双击启动后端（只需一次，之后常驻）：
   ```
   node deploy-console/server.mjs
   ```
2. 浏览器打开 `http://localhost:5188`。
3. 在「发布案例」卡片里：拖入一组案例图片（第一张自动作封面）、填标题/分类/描述。
4. 点「发布案例」→ 控制台自动：
   - 把图片转成与全站一致的 **webp**（sharp，质量 85，不损分辨率）；
   - 按规律命名落盘到 `public/images/cases/<案例id>/`；
   - 往 `data/index.ts` 的中/英案例数组里插入一条新案例（插在「案例更新中」前面）；
   - `git add + commit + push` 推到 `Tero488/Next` → **Vercel 自动部署**。
5. 几秒后线上 `https://next001-dusky.vercel.app/#/cases` 就出现新案例。

## 手动一键发布（改了别的文件时）
在控制台首页点「一键发布」即可把当前所有改动推上去并触发部署。

## 原理
本地项目是 Git 仓库，已配好 GitHub 认证（复用全局 `.gitconfig` 的 Authorization 头）。
远端 `Tero488/Next` 与 Vercel 绑定 —— **push 即部署**。案例数据结构见 `data/index.ts` 的
`casesData.zh` / `casesData.en`，图片路径按 `/images/cases/<id>/<id>-NN.webp` 规律生成。

## 文件说明
- `server.mjs` —— Node 后端：`/api/status`（待发布改动数）、`/api/publish`（手动发布）、
  `/api/add-case`（拖拽发布案例，自动转 webp + 写数据 + 推送）。
- `index.html` —— 甲方操作界面（拖拽上传 + 一键发布）。
- `case-lib.mjs` —— 案例写入核心逻辑（生成 id、转图、插数据），可单测。
- `test-addcase.mjs` —— 本地冒烟测试（运行后会自动还原，不留痕迹）。

## 注意
- **首次**用前需 `git fetch` 把远端已有图片资源（约 550MB）拉到本地一次，之后都是差量推送。
- 调试/试跑可在启动时不推送：`DRY_RUN=1 node deploy-console/server.mjs`。
- 已固化为 WorkBuddy 自动化「网站一键更新工作流」，可在 WorkBuddy 里手动触发运行。
