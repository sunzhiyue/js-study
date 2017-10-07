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
        table.bigInteger('mobile').notNullable().defaultTo(0);
        table.integer('votes').notNullable().defaultTo(0);
        table.boolean('type').notNullable().defaultTo('');
        table.timestamp('create_at').defaultTo(knex.fn.now());
        table.float('float', 12, 8).notNullable().defaultTo();
        table.date('date');
        table.decimal('decimal').notNullable().defaultTo('2');
        table.text('text').notNullable().defaultTo('x');
        // table.enum('enum').notNullable().defaultTo();
        table.binary('binary').notNullable();
        table.charset('utf8');
      });
      yield app.mysql.query(userSchema.toString());
      yield ctx.helper.unique(app, 'user', 'Wechat');
      yield ctx.helper.unique(app, 'user', 'mobile');

    }
  });
};
