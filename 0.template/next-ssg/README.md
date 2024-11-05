nextjs@14 SSG

## dev
* pnpm install
* seo
  * 全局替换`yoursite.com`
  * 修改`lib/const.ts`的`getSiteInfo`, `indexNowKey`
  * 完善head里的title,desc,keywords
  * favicon
* deploy
  * 设置`.env`里的`CLOUDFLARE_API_TOKEN`
  * 设置`package.json`的script.deploy.project
* 杂项: 全局搜`// TODO`，然后进行修改

## dev
* pnpm run dev
* pnpm run dev:wrangler 本地启动cloudflare pages static server
* pnpm run analyze 包大小分析

## deploy
* pnpm run build
* pnpm run deploy
* pnpm run indexNow


## TODO
* [ ] wrangler.toml
