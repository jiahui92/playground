const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.redirect('/index.html');
  }
}

module.exports = HomeController;
