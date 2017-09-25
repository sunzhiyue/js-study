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
      return `${d.getFullYear()} - ${this.format(d.getMonth() + 1)}
       - ${this.format(d.getDate())} - ${this.format(d.getHours())} :
        ${this.format(d.getMinutes())} : ${this.format(d.getSeconds())}`;
    }
    format(a) {
      if (a < 10) {
        return '0' + a;
      }
      return a;
    }
  }
  return Home;
};

