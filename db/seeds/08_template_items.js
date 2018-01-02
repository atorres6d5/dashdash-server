exports.seed = function(knex, Promise) {
  return knex('template_items').insert([
    {
      id: 1,
      template_plan_id: 1,
      name: 'Shower',
      duration: 8,
      skippable: true,
      order: 1
    }, {
      id: 2,
      template_plan_id: 2,
      name: 'Shower',
      duration: 10,
      skippable: true,
      order: null
    }, {
      id: 3,
      template_plan_id: 2,
      name: 'Wake up Kids',
      duration: 5,
      skippable: false,
      order: null
    }, {
      id: 4,
      template_plan_id: 2,
      name: 'Get Self Dressed',
      duration: 5,
      skippable: false,
      order: null
    }, {
      id: 5,
      template_plan_id: 2,
      name: 'Get Kids Dressed',
      duration: 5,
      skippable: false,
      order: null
    }, {
      id: 6,
      template_plan_id: 2,
      name: 'Check kids homework',
      duration: 10,
      skippable: true,
      order: null
    }, {
      id: 7,
      template_plan_id: 2,
      name: 'Walk Pet/Pet Potty',
      duration: 6,
      skippable: false,
      order: null
    }, {
      id: 8,
      template_plan_id: 2,
      name: 'Feed Kids',
      duration: 8,
      skippable: false,
      order: null
    }, {
      id: 9,
      template_plan_id: 2,
      name: 'Feed Pets',
      duration: 2,
      skippable: false,
      order: null
    }, {
      id: 10,
      template_plan_id: 2,
      name: 'Eat',
      duration: 8,
      skippable: true,
      order: null
    }, {
      id: 11,
      template_plan_id: 2,
      name: 'Pack Lunch',
      duration: 5,
      skippable: true,
      order: null
    }, {
      id: 12,
      template_plan_id: 2,
      name: 'Pack Kids Lunch',
      duration: 5,
      skippable: true,
      order: null
    }, {
      id: 13,
      template_plan_id: 2,
      name: 'Lock Home',
      duration: 3,
      skippable: false,
      order: null
    }, {
      id: 14,
      template_plan_id: 2,
      name: 'Get Kids to School/Bus Stop',
      duration: 8,
      skippable: false,
      order: null
    }, {
      id: 15,
      template_plan_id: 2,
      name: 'Pet Day Care',
      duration: 8,
      skippable: true,
      order: null
    }, {
      id: 16,
      template_plan_id: 2,
      name: 'Get to destination',
      duration: 8,
      skippable: false,
      order: null
    }, {
      id: 17,
      template_plan_id: 3,
      name: 'Shower',
      duration: 10,
      skippable: true,
      order: null
    }, {
      id: 28,
      template_plan_id: 3,
      name: 'Wake up Kids',
      duration: 5,
      skippable: false,
      order: null
    }, {
      id: 19,
      template_plan_id: 3,
      name: 'Get Self Dressed',
      duration: 5,
      skippable: false,
      order: null
    }, {
      id: 20,
      template_plan_id: 3,
      name: 'Get Kids Dressed',
      duration: 5,
      skippable: false,
      order: null
    }, {
      id: 21,
      template_plan_id: 3,
      name: 'Check kids homework',
      duration: 10,
      skippable: true,
      order: null
    }, {
      id: 22,
      template_plan_id: 3,
      name: 'Feed Kids',
      duration: 8,
      skippable: false,
      order: null
    }, {
      id: 23,
      template_plan_id: 3,
      name: 'Eat',
      duration: 8,
      skippable: true,
      order: null
    }, {
      id: 24,
      template_plan_id: 3,
      name: 'Get Dressed',
      duration: 8,
      skippable: false,
      order: null
    }, {
      id: 25,
      template_plan_id: 3,
      name: 'Get Kids Dressed',
      duration: 10,
      skippable: false,
      order: null
    }, {
      id: 26,
      template_plan_id: 3,
      name: 'Pack Lunch',
      duration: 5,
      skippable: true,
      order: null
    }, {
      id: 27,
      template_plan_id: 3,
      name: 'Pack Kids Lunch',
      duration: 5,
      skippable: true,
      order: null
    }, {
      id: 28,
      template_plan_id: 3,
      name: 'Lock Home',
      duration: 3,
      skippable: false,
      order: null
    }, {
      id: 29,
      template_plan_id: 3,
      name: 'Get Kids to School/Bus Stop',
      duration: 10,
      skippable: false,
      order: null
    }, {
      id: 30,
      template_plan_id: 3,
      name: 'Get to destination',
      duration: 8,
      skippable: false,
      order: null
    }, {
      id: 31,
      template_plan_id: 4,
      name: 'Shower',
      duration: 10,
      skippable: true,
      order: null
    }, {
      id: 32,
      template_plan_id: 4,
      name: 'Eat',
      duration: 8,
      skippable: true,
      order: null
    }, {
      id: 33,
      template_plan_id: 4,
      name: 'Get Dressed',
      duration: 8,
      skippable: false,
      order: null
    }, {
      id: 34,
      template_plan_id: 4,
      name: 'Pack Lunch',
      duration: 5,
      skippable: true,
      order: null
    }, {
      id: 35,
      template_plan_id: 4,
      name: 'Lock Home',
      duration: 3,
      skippable: false,
      order: null
    }, {
      id: 36,
      template_plan_id: 4,
      name: 'Get to destination',
      duration: 8,
      skippable: false,
      order: null
    },{
      id: 37,
      template_plan_id: 5,
      name: 'Feed pets',
      duration: 3,
      skippable: false,
      order: null
    },{
      id: 38,
      template_plan_id: 5,
      name: 'Feed Kids',
      duration: 15,
      skippable: false,
      order: null
    },{
      id: 39,
      template_plan_id: 5,
      name: 'Make Coffee',
      duration: 5,
      skippable: true,
      order: null
    },{
      id: 40,
      template_plan_id: 5,
      name: 'Watch Cartoons',
      duration: 60,
      skippable: false,
      order: null
    },{
      id: 41,
      template_plan_id: 6,
      name: 'Feed pets',
      duration: 3,
      skippable: false,
      order: null
    },{
      id: 42,
      template_plan_id: 6,
      name: 'Feed kids',
      duration: 15,
      skippable: false,
      order: null
    },{
      id: 43,
      template_plan_id: 6,
      name: 'Make Coffee',
      duration: 5,
      skippable: true,
      order: null
    },{
      id: 44,
      template_plan_id: 6,
      name: 'Watch Cartoons',
      duration: 30,
      skippable: false,
      order: null
    },{
      id: 45,
      template_plan_id: 7,
      name: 'Take a Shower',
      duration: 10,
      skippable: true,
      order: null
    },{
      id: 46,
      template_plan_id: 7,
      name: 'Make Coffee',
      duration: 3,
      skippable: true,
      order: null
    },{
      id: 47,
      template_plan_id: 7,
      name: 'Do whatever you want',
      duration: 3,
      skippable: false,
      order: null
    }

  ]).then(() => {
    return knex.raw(`SELECT setval('template_items_id_seq', (SELECT MAX(id) FROM template_items));`)
  })
}
