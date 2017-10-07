'use strict';

module.exports = app => {
  app.post('/create', 'user.create');
};
