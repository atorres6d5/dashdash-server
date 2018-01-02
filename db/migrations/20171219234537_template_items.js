
exports.up = function(knex, Promise) {
  return knex.schema.createTable('template_items', (table) => {
    table.increments()
    table.integer('template_plan_id').notNullable()
    table.foreign('template_plan_id').references('template_plans.id').onDelete('CASCADE')
    table.string('name').notNullable().defaultTo('')
    table.integer('duration').notNullable().defaultTo(5)
    table.boolean('skippable').notNullable().defaultTo(false)
    table.integer('order').defaultTo(null)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('template_items')
};
