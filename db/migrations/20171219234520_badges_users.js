exports.up = function(knex, Promise) {
  return knex.schema.createTable('badges_users', (table) => {
    table.increments()
    table.integer('badge_id').notNullable().defaultTo('')
    table.integer('user_id').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('badges_users')
};
