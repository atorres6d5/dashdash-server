exports.seed = function(knex, Promise) {
  return knex('template_plans').insert([
    { }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('template_plans_id_seq', (SELECT MAX(id) FROM template_plans));`)
  })
}