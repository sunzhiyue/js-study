/**
 * 2017-9-26   sunzhiyue
*/
'use strict';

module.exports = app => {
  class TestController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.teacher.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.teacher.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.teacher.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.teacher.update(this.ctx.request.body);
    }
  }
  return TestController;
};
