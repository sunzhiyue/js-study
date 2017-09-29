/**
 * 2017-9-29  sunzhiyue
 */
'use strict';

module.exports = app => {
  class Mobile extends app.Service {
    * set(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * update(param) {
      try {
        yield app.mysql.update('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
  }
  return Mobile;
};
