
exports.up = function(knex, Promise) {
  return knex.schema.createTable('template_plans', (table) => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.string('description').notNullable().defaultTo('')
    table.enu('type', [ 'weekday', 'weekend' ]).defaultTo('weekday')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('template_plans')
};
