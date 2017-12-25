exports.seed = function(knex, Promise) {
  return knex('badges_users').insert([
    { }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('badges_users_id_seq', (SELECT MAX(id) FROM badges_users));`)
  })
}
