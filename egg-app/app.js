'use strict';

const knex = require('knex')({
  client: 'mysql',
});

module.exports = app => {
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const hasUser = yield app.mysql.query(knex.schema.hasTable('user').toString());
    if (hasUser.length === 0) {
      const userSchema = knex.schema.createTableIfNotExists('user', function(table) {
        table.increments();
        table.string('Wechat').notNullable().defaultTo('');
        table.integer('mobile').notNullable().defaultTo(0);
        table.integer('votes').notNullable().defaultTo(0);
        table.string('type').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'user', 'Wechat');
      yield ctx.helper.unique(app, 'user', 'mobile');

    }
  });
  app.beforeStart(function* () {
    const ctx = app.createAnonymousContext();
    const hasPhoto = yield app.mysql.query(knex.schema.hasTable('photo').toString());
    if (hasPhoto.length === 0) {
      const photoSchema = knex.schema.createTableIfNotExists('photo', function(table) {
        table.increments();
        table.string('Wechat').notNullable().defaultTo('');
        table.string('model').notNullable().defaultTo('');
        table.integer('vote').notNullable().defaultTo(0);
        table.string('state').notNullable().defaultTo('');
        table.string('URL').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.charset('utf8');
      });
      yield app.mysql.query(photoSchema.toString());
      yield ctx.helper.unique(app, 'photo', 'Wechat');
      yield ctx.helper.unique(app, 'photo', 'URL');

    }
  });
};
