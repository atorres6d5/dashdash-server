
exports.up = function(knex, Promise) {
  return knex.schema.createTable('template_items', (table) => {
    table.increments()
    table.integer('template_plan_id').notNullable()
    table.foreign('template_plan_id').references('template_plans.id').onDelete('CASCADE')
    table.string('name').notNullable().defaultTo('')
    table.time('duration').notNullable().defaultTo('00:05:00')
    table.boolean('snoozable').notNullable().defaultTo(false)
    table.integer('order').defaultTo(null)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('template_items')
};
