exports.seed = function(knex, Promise) {
  return knex('template_plan_templates_item').insert([
    { }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('template_plans_template_items_id_seq', (SELECT MAX(id) FROM template_plans_template_items));`)
  })
}
