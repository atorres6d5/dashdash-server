exports.seed = function(knex, Promise) {
  return knex('plans').insert([
    { }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('plans_id_seq', (SELECT MAX(id) FROM plans));`)
  })
}
