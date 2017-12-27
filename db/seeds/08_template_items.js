exports.seed = function(knex, Promise) {
  return knex('template_items').insert([
    { id: 1, template_plan_id: 1, name: 'Shower', duration: '00:08:00', snoozable: true, order: 1 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('template_items_id_seq', (SELECT MAX(id) FROM template_items));`)
  })
}