'use strict';

module.exports = app => {
  class Test extends app.Service {
    * test() {
      return 'test1';
    }
  }

  return Test;
};
