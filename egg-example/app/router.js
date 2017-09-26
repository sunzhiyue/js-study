'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.get('/sina', 'home.sina');
  app.get('/sohu', 'home.sohu');
  app.get('/test', 'home.test');
  app.get('/apple', 'home.apple');
  app.get('/lodash', 'home.lodash1');
  app.get('/cx', 'home.cx');
  app.get('/help', 'home.help');
  app.post('/help', 'home.help');
  app.post('/date', 'home.date');
  app.post('/create', 'test.create');
  app.post('/get', 'test.get');
  app.post('/delete', 'test.delete');
  app.post('/update', 'test.update');
  app.post('/create1', 'student.create');
  app.post('/select', 'student.select');
  app.post('/get1', 'student.get');
  app.post('/delete1', 'student.delete');
  app.post('/update1', 'student.update');
  app.post('/create2', 'teacher.create');
  app.post('/get2', 'teacher.get');
  app.post('/delete2', 'teacher.delete');
  app.post('/update2', 'teacher.update');
  app.post('/transaction', 'student.transaction');
};
