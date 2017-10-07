'use strict';

module.exports = app => {
  class TestController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.user.create(this.ctx.request.body);
    }
  }
  return TestController;
};
