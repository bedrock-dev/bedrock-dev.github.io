# trapdoor wiki

更新中

## BedrockMap 网页版

访问 <https://bedrock-dev.github.io/bm/web/>，也可从中英文 BedrockMap 首页进入。
应用作为静态文件维护在 `docs/public/bm/web/`，VitePress 构建会原样复制到发布目录，
现有文档页面继续保留。

更新版本时，先在 BedrockMap 仓库运行 `./scripts/build_wasm.ps1`，再将
`dist/BedrockMap-<版本>-wasm/` 中的 `index.html`、`BedrockMap.js`、`BedrockMap.wasm`、
`qtloader.js` 和 `coi-serviceworker.js` 一起复制到该目录。不要遗漏 Service Worker，
它负责为 GitHub Pages 启用多线程 WASM 需要的跨源隔离。

```powershell
pnpm run docs:build
pnpm run docs:preview
```

推送 `main` 后，现有 GitHub Actions 会构建站点并发布到 `gh-pages`。
