'use strict';
const _ = require('lodash');
module.exports = app => {
  class Lodash1 extends app.Service {
    * test() {
      return _.drop([ 1, 2, 3 ]);
    }
    * test1() {
      return 'test3';
    }
  }
  return Lodash1;
};
