
exports.up = function(knex, Promise) {
  return knex.schema.createTable('template_plans_template_items', (table) => {
    table.increments()
    table.integer('template_plan_id').notNullable().defaultTo('')
    table.integer('template_item_id').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('template_plans_template_items')
};
