const Controller = require('egg').Controller;

class TestController extends Controller {
  async index() {
    this.ctx.body = {
      success: true,
      msg: 'hi, test api'
    };
  }
}

module.exports = TestController;
