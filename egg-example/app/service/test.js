'use strict';
const _ = require('lodash');

module.exports = app => {
  class Test extends app.Service {
    * test() {
      return 'test1';
    }
    * lodash() {
      const users = [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
        { user: 'peddles', age: 1, active: true },
      ];
      return `${_.find(users, function(o) { return o.age < 40; })}-
      ${_.find(users, { age: 1, active: true })} - 
      ${_.find(users, [ 'active', false ])}-
      ${_.find(users, 'active')}`;
    }
  }

  return Test;
};
