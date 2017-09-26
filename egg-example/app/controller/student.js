/**
 * 2017-9-25   sunzhiyue
*/
'use strict';

module.exports = app => {
  class TestController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.student.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.student.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.student.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.student.update(this.ctx.request.body);
    }
    * select() {
      this.ctx.body = yield this.service.student.select(this.ctx.request.body);
    }
    * transaction() {
      this.ctx.body = yield this.service.student.transaction();
    }
  }
  return TestController;
};
