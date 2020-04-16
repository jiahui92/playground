'use strict';

const Controller = require('egg').Controller;

class Con extends Controller {

  async log() {
    const { ctx } = this;
    ctx.body = 'success';
    ctx.logger.info(JSON.stringify(ctx.query));
    /** 打点基础数据
     * {
     *    _appName: 'douban-group-filter', // 应用名
     *    _event: 'userInputField', // 事件名称
     *    _userId: 'xxxx',
     *    _platform: '', // h5 | pc | xcx
     * }
     */
  }
}

module.exports = Con;
