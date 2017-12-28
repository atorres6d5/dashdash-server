
exports.up = function(knex, Promise) {
  return knex.schema.createTable('plans', (table) => {
    table.increments()
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.string('name').notNullable().defaultTo('')
    table.boolean('active').notNullable().defaultTo(true)
    table.integer('successes').notNullable().defaultTo(0)
    table.integer('runs').notNullable().defaultTo(0)
    table.time('start_time').notNullable().defaultTo('12:00:00')
    table.time('deadline').notNullable().defaultTo('00:30:00')
    table.string('days_to_run').notNullable().defaultTo('SUN,MON,TUE,WED,THU,FRI,SAT')
    table.integer('parent_plan').defaultTo(null)
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('plans')
}
