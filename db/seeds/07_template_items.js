exports.seed = function(knex, Promise) {
  return knex('template_items').insert([
    { }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('template_items_id_seq', (SELECT MAX(id) FROM template_items));`)
  })
}