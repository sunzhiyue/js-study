'use strict';

module.exports = app => {
  app.post('/c_1', 'home.create');
  app.post('/d_1', 'home.delete');
  app.post('/g_1', 'home.get');
  app.post('/u_1', 'home.update');
  app.post('/c_2', 'photo.create');
  app.post('/d_2', 'photo.delete');
  app.post('/g_2', 'photo.get');
  app.post('/u_2', 'photo.update');

};
