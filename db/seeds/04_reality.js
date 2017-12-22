exports.seed = function(knex, Promise) {
  return knex('reality').insert([
    { }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('reality_id_seq', (SELECT MAX(id) FROM reality));`)
  })
}