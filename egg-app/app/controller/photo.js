/**
 * 2017-9-28   sunzhiyue
*/
'use strict';

module.exports = app => {
  class TestController extends app.Controller {
    * create() {
      this.ctx.body = yield this.service.photo.create(this.ctx.request.body);
    }
    * delete() {
      this.ctx.body = yield this.service.photo.delete(this.ctx.request.body);
    }
    * get() {
      this.ctx.body = yield this.service.photo.get(this.ctx.request.body);
    }
    * update() {
      this.ctx.body = yield this.service.photo.update(this.ctx.request.body);
    }
  }
  return TestController;
};
