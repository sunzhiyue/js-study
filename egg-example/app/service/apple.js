'use strict';

module.exports = app => {
  class Apple extends app.Service {
    * test() {
      return yield app.curl('https://apple.com/cn');
    }
  }
  return Apple;
};
