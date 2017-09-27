'use strict';

module.exports = app => {
  app.post('/create_1', 'user.create');
  app.post('/delete_1', 'user.delete');
  app.post('/get_1', 'user.get');
  app.post('/update_1', 'user.update');
  app.post('/transaction_1', 'user.transaction');
  app.post('/select_1', 'user.select');
};
