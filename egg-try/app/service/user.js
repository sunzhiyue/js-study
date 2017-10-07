'use strict';

module.exports = app => {
  class Test extends app.Service {
    * create(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Test;
};
