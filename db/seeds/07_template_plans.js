exports.seed = function(knex, Promise) {
  return knex('template_plans').insert([
    { id: 1, name: 'Urban Dweller', description: 'Creating your first schedule' }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('template_plans_id_seq', (SELECT MAX(id) FROM template_plans));`)
  })
}
