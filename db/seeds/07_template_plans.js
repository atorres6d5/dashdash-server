exports.seed = function(knex, Promise) {
  return knex('template_plans').insert([
    {
      id: 1,
      name: 'Urban Dweller',
      description: 'Creating your first schedule'
    }, {
      id: 2,
      name: 'Weekday With Kids and Pets',
      description: 'Someone who has pets and kids weekday schedule'
    }, {
      id: 3,
      name: 'Weekday With kids',
      description: 'Someone who has kids weekday schedule'
    }, {
      id: 4,
      name: 'Weekday Schedule',
      description: 'Someone who is with out dependents weekday schedule'
    }, {
      id: 5,
      name: 'Weekend With Kids and Pets',
      description: 'Weekend for someone with pets and kids and wants to watch morning cartoons'
    }, {
      id: 6,
      name: 'Weekend With Kids',
      description: 'Weekend With kids and watch cartoons'
    }, {
      id: 7,
      name: 'Weekend Schedule',
      description: 'Weekend for someone with no dependents'
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('template_plans_id_seq', (SELECT MAX(id) FROM template_plans));`)
  })
}
