exports.up = function(knex, Promise) {
  return knex.schema.createTable('badges', (table) => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.string('description').notNullable().defaultTo('')
    table.string('image').notNullable().defaultTo('')
    table.boolean('active').notNullable().defaultTo(true)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('badges')
};
