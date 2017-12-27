
exports.up = function(knex, Promise) {
  return knex.schema.createTable('reality', (table) => {
    table.increments()
    table.integer('item_id').notNullable()
    table.foreign('item_id').references('items.id').onDelete('CASCADE')
    table.time('start_time').defaultTo(null)
    table.time('actual_duration').defaultTo(null)
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('reality')
}
