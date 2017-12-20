exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('first_name').notNullable().defaultTo('')
    table.string('last_name').notNullable().defaultTo('')
    table.string('username').notNullable().defaultTo('')
    table.string('hashed_password').notNullable().defaultTo('')
    table.boolean('children').notNullable().defaultTo(false)
    table.boolean('pets').notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
