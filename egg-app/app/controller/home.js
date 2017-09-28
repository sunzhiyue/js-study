/**
 * 2017-9-28   sunzhiyue
*/
'use strict';

module.exports = app => {
  class TestController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.user.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.user.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.user.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.user.update(this.ctx.request.body);
    }
  }
  return TestController;
};
