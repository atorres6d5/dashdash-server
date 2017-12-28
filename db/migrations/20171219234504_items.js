
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', (table) => {
    table.increments()
    table.integer('plan_id').notNullable()
    table.foreign('plan_id').references('plans.id').onDelete('CASCADE')
    table.string('name').notNullable().defaultTo('')
    table.time('duration').notNullable().defaultTo('00:05:00')
    table.boolean('skippable').notNullable().defaultTo(false)
    table.integer('order').defaultTo(null)
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items')
}
