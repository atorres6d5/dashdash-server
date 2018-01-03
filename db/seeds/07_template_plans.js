exports.seed = function(knex, Promise) {
  return knex('template_plans').insert([
    {
      id: 1,
      name: 'Weekday With Kids and Pets',
      description: 'Weekday schedule for someone who has pets and kids',
      type: 'weekday'
    }, {
      id: 2,
      name: 'Weekday With Kids',
      description: 'Weekday schedule for someone who has kids',
      type: 'weekday'
    }, {
      id: 3,
      name: 'Weekday With Pets',
      description: 'Weekday schedule for someone who has pets',
      type: 'weekday'
    }, {
      id: 4,
      name: 'Weekday Schedule',
      description: 'Weekday schedule for someone who is without dependents',
      type: 'weekday'
    }, {
      id: 5,
      name: 'Weekend With Kids and Pets',
      description: 'Weekend schedule for someone who has pets and kids and watches cartoons',
      type: 'weekend'
    }, {
      id: 6,
      name: 'Weekend With Kids',
      description: 'Weekend schedule for someone who has kids and watches cartoons',
      type: 'weekend'
    }, {
      id: 7,
      name: 'Weekend With Pets',
      description: 'Weekend schedule for someone who has pets and watches cartoons',
      type: 'weekend'
    }, {
      id: 8,
      name: 'Weekend Schedule',
      description: 'Weekend schedule for someone who has no dependents and watches cartoons',
      type: 'weekend'
    }
  ]).then(() => {
    return knex.raw(`SELECT setval('template_plans_id_seq', (SELECT MAX(id) FROM template_plans));`)
  })
}
