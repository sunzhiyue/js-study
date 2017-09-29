/**
 * 2017-9-28  sunzhiyue
 */
'use strict';

module.exports = app => {
  class Photo extends app.Service {
    * upload(param) {
      try {
        yield app.mysql.insert('photo', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * vote(param) {
      try {
        yield app.mysql.insert('photo', param);
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return true;
    }
    * list(param) {
      let res;
      try {
        res = yield app.mysql.select('photo', {
          where: {
            id: param,
          },
        });
      } catch (e) {
        this.ctx.logger.error(e);
        return false;
      }
      return res;
    }
  }
  return Photo;
};
