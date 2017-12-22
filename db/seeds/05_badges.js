exports.seed = function(knex, Promise) {
  return knex('badges').insert([
    { }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('badges_id_seq', (SELECT MAX(id) FROM badges));`)
  })
}