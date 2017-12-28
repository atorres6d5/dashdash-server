exports.up = function(knex, Promise) {
  return knex.schema.createTable('badges_users', (table) => {
    table.integer('badge_id').notNullable()
    table.foreign('badge_id').references('badges.id').onDelete('CASCADE')
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('badges_users')
};
