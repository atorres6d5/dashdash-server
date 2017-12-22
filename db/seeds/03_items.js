exports.seed = function(knex, Promise) {
  return knex('items').insert([
    { }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('items_id_seq', (SELECT MAX(id) FROM items));`)
  })
}