'use strict';

module.exports = app => {
  class Test1 extends app.Service {
    * test() {
      return 'test2';
    }
  }

  return Test1;
};
