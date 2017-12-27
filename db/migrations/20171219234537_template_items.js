
exports.up = function(knex, Promise) {
  return knex.schema.createTable('template_items', (table) => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.string('description').notNullable().defaultTo('')
    table.integer('common-duration').notNullable().defaultTo('')
    table.boolean('skippable').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('template_items')
};
