'use strict';

module.exports = app => {
  class Home extends app.Service {
    * find() {
      return '1';
    }
    * sina() {
      return yield app.curl('https://www.sina.com.cn');
    }
    * sohu() {
      return yield app.curl('https://sohu.com');
    }
    * test() {
      return 'home';
    }
    * date() {
      const d = new Date();
      return `${d.getFullYear()} - ${d.getMonth() + 1} - ${d.getDate()} - ${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
    }
  }

  return Home;
};

