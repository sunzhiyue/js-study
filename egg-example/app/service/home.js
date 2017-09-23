'use strict';

module.exports = app => {
  class Home extends app.Service {
    * find() {
      return '1';
    }
  }
  return Home;
};
