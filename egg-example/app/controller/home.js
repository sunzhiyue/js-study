'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = yield this.service.home.find();
    }

    * a() {
      this.ctx.body = 'a';
    }
  }
  return HomeController;
};
