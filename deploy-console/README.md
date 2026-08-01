# 网站更新控制台（甲方零门槛拖拽发布）

让**完全不懂技术**的甲方也能更新网站：把图片拖进网页、填几个字段、点一下，
剩下的「浏览器转图 + 改数据 + 推送 GitHub + 触发部署」全自动，全程不用碰命令行、不用装软件。

支持四大板块：**① 案例（享你所想 / 百变空间 两种类型）/ ② 新闻 / ③ 加入我们（招聘）/ ④ 百变空间产品**。

---

## 给甲方：绿色便携包（推荐，双击即用）

已生成在 `deploy-console/dist/NextConsole/`，整个文件夹压缩后发给甲方即可：

```
NextConsole/
├─ 启动.bat        ← 甲方双击这个
├─ node.exe        ← 内置 Node，甲方无需安装任何东西
├─ server.cjs      ← 后端
├─ case-lib.cjs    ← 写入逻辑
├─ frontend.cjs    ← 前端页面（内嵌）
├─ config.json     ← 含 Token，发送前由你填好
└─ README.txt      ← 甲方看的使用说明
```

**甲方的三步：**
1. 用记事本打开 `config.json`，把 `ghToken` / `consolePassword` 改成真实值（你替他填好）。
2. 双击「启动.bat」→ 自动弹出浏览器到控制台页面。
3. 输密码 → 选板块 → 拖图填字 → 点发布。

> 注意：`config.json` 含 GitHub Token，请勿公开分享或提交到公开仓库。

---

## 给你（开发者）：本地源码运行 / 重新打包

```bash
cd deploy-console
node server.cjs                      # 开发模式（默认读全局 gitconfig 的 Token）
CONSOLE_PASSWORD=xxx node server.cjs # 指定密码
GH_TOKEN=ghp_xxx node server.cjs     # 显式指定 Token
```

重新生成便携包（含最新代码 + 内置 node.exe）：
```bash
node make-package.cjs               # 输出到 dist/NextConsole/
```
> 打包脚本会找本机 node.exe（优先 `NODE_BIN` 环境变量，其次脚本同级、再退回 WorkBuddy 托管目录）。
> 若都找不到，请自行放一个 Windows x64 的 `node.exe`(v18+) 到 `deploy-console/node.exe` 再跑。

想打成**真正的单个 `NextConsole.exe`**（把 node 运行时也烧进去）：
```bash
npm i pkg
node build.cjs                      # 需要能联网下载 Node 运行时（沙箱环境可能失败，用便携版兜底）
```

---

## 发布机制（重要）

控制台**不依赖本地 git / 不依赖本地仓库**：
- 图片在**甲方浏览器里用 canvas 转成 webp** 再上传（不再需要 sharp 原生模块，所以才能干净打包）；
- 后端用 GitHub REST API（Git Data API）把 `data/index.ts` 与图片 blob 作为一次提交直接推到
  `Tero488/Next` 的 main → Vercel 自动部署；
- Token 来自 `config.json` 的 `ghToken`，或环境变量 `GH_TOKEN`，或全局 `~/.gitconfig` 的 `http.extraheader`。

无 Token 时退化为「本地文件模式」（开发用，读写本地仓库）。

---

## 接口

所有写操作需先 `POST /api/login` 拿 token（12h 有效），请求头带 `Authorization: Bearer <token>`。

- `POST /api/login`        —— 密码登录，返回 token
- `POST /api/add-content`  —— 发布（body：`{ section: "cases"|"news"|"jobs"|"products", ...字段 }`；案例可带 `type: "idealyou"|"spacemagic"`）
- `GET  /api/publish`      —— 手动同步控制台代码到仓库（开发用）
- `GET  /api/status`       —— 查看状态（只读）

## 文件说明

- `server.cjs`     —— 后端（CommonJS，可打包；内嵌前端、鉴权、GitHub 推送）
- `index.html`     —— 甲方操作界面源文件（构建时转 base64 进 `frontend.cjs`）
- `frontend.cjs`   —— 由 `index.html` 生成（gitignore，构建产物）
- `case-lib.cjs`   —— 写入核心逻辑（生成 id、插 `data/index.ts`，可单测）
- `make-package.cjs` —— 组装绿色便携包到 `dist/NextConsole/`
- `build.cjs`      —— 用 pkg 打成单个 `NextConsole.exe`（需联网）
- `config.example.json` —— 配置模板

## 调试 / 试跑

- 不推送只试逻辑：`DRY_RUN=1 node server.cjs`（GitHub 提交会被跳过）
- 换端口：`PORT=5199 node server.cjs`
