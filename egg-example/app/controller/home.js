'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = yield this.service.home.find();
    }
    * sina() {
      const r = yield this.service.home.sina();
      this.ctx.body = r;
    }
    * sohu() {
      const d = yield this.service.home.sohu();
      this.ctx.body = d;
    }
    * test() {
      const h = yield this.service.home.test();
      const k = yield this.service.test.test();
      const e = yield this.service.test1.test();
      this.ctx.body = h + k + e;
    }
    * apple() {
      const ap = yield this.service.apple.test();
      this.ctx.body = ap;
    }
    * lodash1() {
      const l = yield this.service.lodash1.test();
      const p = yield this.service.lodash1.test1();
      this.ctx.body = l + p;
    }
    * cx(ctx) {
      const result = yield ctx.curl('https://registry.npm.taobao.org/egg/latest', {
        dataType: 'json',
        timeout: 3000,
      });
      ctx.body = {
        status: result.status,
        headers: result.headers,
        package: result.data,
      };
    }
    * help() {
      const h = this.ctx.helper.foo(this.ctx.request.query.a);
      const h2 = this.ctx.helper.a(this.ctx.request.query.b);
      this.ctx.body = h + '   ' + h2;
    }
    * date() {
      const r = yield this.service.home.date();
      this.ctx.body = r;
    }
  }
  return HomeController;
};
