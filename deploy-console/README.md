# 网站更新控制台（拖拽发布版 · 支持三大板块）

让**完全不懂技术**的甲方也能更新网站：把图片拖进网页、填几个字段、点一下，
剩下的「转图 + 写文件 + 改数据 + 推送 GitHub + 触发部署」全自动，全程不用碰命令行。

支持四大板块：**① 案例（含「享你所想 / 百变空间」两种类型）/ ② 新闻 / ③ 加入我们（招聘）/ ④ 百变空间产品**。

## 甲方每次怎么发内容（核心用法）
1. 启动后端（只需一次，之后常驻）：
   ```
   node deploy-console/server.mjs
   ```
2. 浏览器打开 `http://localhost:5188`（端口可用 `PORT` 环境变量改，如 `PORT=5199 node ...`）。
3. 在对应板块卡片里操作：
   - **案例**：先选类型（享你所想=空间案例 / 百变空间=户型案例），拖入一组案例图（第一张自动作封面）、填标题/分类/描述 → 点「发布案例」
   - **新闻**：拖入一张封面图、填标题/日期/摘要 → 点「发布新闻」
   - **加入我们**：填职位名 + 多条任职要求（每行一条）→ 点「发布职位」
   - **百变空间产品**：拖入一组产品图（第一张为封面）、填产品名称(中/英)/分类/描述(中/英) → 点「发布产品」
4. 控制台自动完成：
   - 图片转成与全站一致的 **webp**（sharp，质量 85，不损分辨率）；
   - 按规律命名落盘（案例 `public/images/cases/<id>/`，新闻 `public/images/news/<id>.webp`，产品 `public/images/products/<id>/`）；
   - 往 `data/index.ts` 里插入新条目（案例/新闻插到最前并带 `type` 区分；招聘插到最后；产品写入 `productsData` 单数组，含 `title/description` 的 `{zh,en}` 双语）；
   - 通过 **GitHub REST API 直接提交**到 `Tero488/Next` 的 main → **Vercel 自动部署**。
5. 几秒后线上对应页面就出现新内容（案例 `#/cases`、新闻 `#/news`、加入我们 `#/join`、产品 `#/nexthome/space-magic/products`）。

## 发布机制（重要）
发布**不再依赖本地 git**：控制台用 GitHub REST API（Git Data API）把改动作为一次提交
直接推到仓库 main，因此无论本机 git 是否通、本地仓库历史如何，都能稳定触发部署。
Token 取自环境变量 `GH_TOKEN`，或全局 `~/.gitconfig` 的 `http.extraheader`（已配置）。

手动同步控制台自身代码：首页点「一键发布」，或调用 `POST/GET /api/publish`（默认推送
`deploy-console/` 下三个文件）。

## 接口
- `POST /api/add-content` —— 拖拽发布（body：`{ section: "cases"|"news"|"jobs"|"products", ...字段 }`；案例可带 `type: "idealyou"|"spacemagic"`）
- `GET  /api/publish`    —— 手动同步控制台代码到仓库
- `GET  /api/status`     —— 查看本地文件改动（只读，仅供参考）

## 文件说明
- `server.mjs`  —— Node 后端：静态托管控制台 + 上述接口；`DRY_RUN=1` 时只写本地不推送。
- `index.html`  —— 甲方操作界面（三板块切换 + 拖拽上传 + 发布）。
- `case-lib.mjs` —— 写入核心逻辑（生成 id、转 webp、插入 `data/index.ts`），可单测。
- `test-addcase.mjs` —— 本地冒烟测试（运行后自动还原，不留痕迹）。

## 调试 / 试跑
- 不推送只写本地：`DRY_RUN=1 node deploy-console/server.mjs`
- 换端口：`PORT=5199 node deploy-console/server.mjs`

## 注意
- 本地项目无需是 git 仓库也能发布（走 REST API）；若想用 git，认证已复用全局 `.gitconfig`。
- 已固化为 WorkBuddy 自动化「网站一键更新工作流」，可在 WorkBuddy 里手动触发运行。
