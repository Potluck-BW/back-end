exports.up = function (knex) {
    return (
      knex.schema
        .createTable('users', (tbl) => {
          tbl.increments();
          tbl.text('username', 255).notNull().unique();
          tbl.string('password', 255).notNull();
        })
        .createTable('event', (tbl) => {
          tbl.increments();
          tbl.string('title', 255).notNull();
          tbl.string('date', 255).notNull();
          tbl.string('description', 255).notNull();
          tbl
            .integer('users_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        })
    );
  };

  exports.down = function (knex) {
    return knex.schema
      .dropTableIfExists('event')
      .dropTableIfExists('users')
  };