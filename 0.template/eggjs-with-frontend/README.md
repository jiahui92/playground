# api
* 主要用于生成各应用的log打点数据，然后通过filebaet录入到ELK中
  * `/logger/log`
  * log默认生成在`~/logs`
  * 前端打点参考 [log.js](https://github.com/jiahui92/taro-douban-group-filter/blob/master/src/utils/logger.tsx)
* <s>其次可简单地提供可配置的数据 (使用consul代替了)</s>


### 启动
* 本地开发
  * npm run dev
* 服务器部署
  * npm run start
  * 或者 使用jenkins + docker
