/**
 * 2017-9-28  sunzhiyue
 */
'use strict';

module.exports = app => {
  class User extends app.Service {
    * register(param) {
      try {
        yield app.mysql.insert('user', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }

    * login(req) {
      let res;
      try {
        res = yield app.mysql.get('user', req);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
    * update() {
      try {
        yield app.mysql.update('user', );
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * transaction() {
      const conn = yield app.mysql.beginTransaction();
      try {
        yield conn.update('user', {  });
        yield conn.update('photo', {  });
        yield conn.commit();
      } catch (e) {
        yield conn.rollback();
        this.ctx.logger.error(e);
        return false;
      }
    }
  }
  return User;
};
