exports.seed = function(knex, Promise) {
  return knex('template_items').insert([
    {
      id: 1,
      template_plan_id: 1,
      name: 'Shower',
      duration: 10,
      skippable: true,
      order: 1
    }, {
      id: 2,
      template_plan_id: 1,
      name: 'Wake up Kids',
      duration: 5,
      skippable: false,
      order: 2
    }, {
      id: 3,
      template_plan_id: 1,
      name: 'Get Self Dressed',
      duration: 5,
      skippable: false,
      order: 3
    }, {
      id: 4,
      template_plan_id: 1,
      name: 'Get Kids Dressed',
      duration: 5,
      skippable: false,
      order: 4
    }, {
      id: 5,
      template_plan_id: 1,
      name: 'Check kids homework',
      duration: 10,
      skippable: true,
      order: 5
    }, {
      id: 6,
      template_plan_id: 1,
      name: 'Walk Pet/Pet Potty',
      duration: 6,
      skippable: false,
      order: 6
    }, {
      id: 7,
      template_plan_id: 1,
      name: 'Feed Kids',
      duration: 8,
      skippable: false,
      order: 7
    }, {
      id: 8,
      template_plan_id: 1,
      name: 'Feed Pets',
      duration: 2,
      skippable: false,
      order: 8
    }, {
      id: 9,
      template_plan_id: 1,
      name: 'Eat',
      duration: 8,
      skippable: true,
      order: 9
    }, {
      id: 10,
      template_plan_id: 1,
      name: 'Pack Lunch',
      duration: 5,
      skippable: true,
      order: 10
    }, {
      id: 11,
      template_plan_id: 1,
      name: 'Pack Kids Lunch',
      duration: 5,
      skippable: true,
      order: 111
    }, {
      id: 12,
      template_plan_id: 1,
      name: 'Lock Home',
      duration: 3,
      skippable: false,
      order: 12
    }, {
      id: 13,
      template_plan_id: 1,
      name: 'Get Kids to School/Bus Stop',
      duration: 8,
      skippable: false,
      order: 13
    }, {
      id: 14,
      template_plan_id: 1,
      name: 'Pet Day Care',
      duration: 8,
      skippable: true,
      order: 14
    }, {
      id: 15,
      template_plan_id: 1,
      name: 'Get to destination',
      duration: 8,
      skippable: false,
      order: 15
    }, {
      id: 16,
      template_plan_id: 2,
      name: 'Shower',
      duration: 10,
      skippable: true,
      order: 1
    }, {
      id: 17,
      template_plan_id: 2,
      name: 'Wake up Kids',
      duration: 5,
      skippable: false,
      order: 2
    }, {
      id: 18,
      template_plan_id: 2,
      name: 'Get Self Dressed',
      duration: 5,
      skippable: false,
      order: 3
    }, {
      id: 19,
      template_plan_id: 2,
      name: 'Get Kids Dressed',
      duration: 5,
      skippable: false,
      order: 4
    }, {
      id: 20,
      template_plan_id: 2,
      name: 'Check kids homework',
      duration: 10,
      skippable: true,
      order: 5
    }, {
      id: 21,
      template_plan_id: 2,
      name: 'Feed Kids',
      duration: 8,
      skippable: false,
      order: 6
    }, {
      id: 22,
      template_plan_id: 2,
      name: 'Eat',
      duration: 8,
      skippable: true,
      order: 7
    }, {
      id: 23,
      template_plan_id: 2,
      name: 'Get Dressed',
      duration: 8,
      skippable: false,
      order: 8
    }, {
      id: 24,
      template_plan_id: 2,
      name: 'Get Kids Dressed',
      duration: 10,
      skippable: false,
      order: 9
    }, {
      id: 25,
      template_plan_id: 2,
      name: 'Pack Lunch',
      duration: 5,
      skippable: true,
      order: 10
    }, {
      id: 26,
      template_plan_id: 2,
      name: 'Pack Kids Lunch',
      duration: 5,
      skippable: true,
      order: 11
    }, {
      id: 27,
      template_plan_id: 2,
      name: 'Lock Home',
      duration: 3,
      skippable: false,
      order: 12
    }, {
      id: 28,
      template_plan_id: 2,
      name: 'Get Kids to School/Bus Stop',
      duration: 10,
      skippable: false,
      order: 13
    }, {
      id: 29,
      template_plan_id: 2,
      name: 'Get to destination',
      duration: 8,
      skippable: false,
      order: 14
    }, {
      id: 30,
      template_plan_id: 3,
      name: 'Shower',
      duration: 10,
      skippable: true,
      order: 1
    }, {
      id: 31,
      template_plan_id: 3,
      name: 'Get Self Dressed',
      duration: 5,
      skippable: false,
      order: 2
    }, {
      id: 32,
      template_plan_id: 3,
      name: 'Walk Pet/Pet Potty',
      duration: 6,
      skippable: false,
      order: 3
    }, {
      id: 33,
      template_plan_id: 3,
      name: 'Feed Pets',
      duration: 2,
      skippable: false,
      order: 4
    }, {
      id: 34,
      template_plan_id: 3,
      name: 'Eat',
      duration: 8,
      skippable: true,
      order: 5
    }, {
      id: 35,
      template_plan_id: 3,
      name: 'Pack Lunch',
      duration: 5,
      skippable: true,
      order: 6
    }, {
      id: 36,
      template_plan_id: 3,
      name: 'Lock Home',
      duration: 3,
      skippable: false,
      order: 7
    }, {
      id: 37,
      template_plan_id: 3,
      name: 'Pet Day Care',
      duration: 8,
      skippable: true,
      order: 8
    }, {
      id: 38,
      template_plan_id: 3,
      name: 'Get to destination',
      duration: 8,
      skippable: false,
      order: 9
    }, {
      id: 39,
      template_plan_id: 4,
      name: 'Shower',
      duration: 10,
      skippable: true,
      order: 1
    }, {
      id: 40,
      template_plan_id: 4,
      name: 'Eat',
      duration: 8,
      skippable: true,
      order: 2
    }, {
      id: 41,
      template_plan_id: 4,
      name: 'Get Dressed',
      duration: 8,
      skippable: false,
      order: 3
    }, {
      id: 42,
      template_plan_id: 4,
      name: 'Pack Lunch',
      duration: 5,
      skippable: true,
      order: 4
    }, {
      id: 43,
      template_plan_id: 4,
      name: 'Lock Home',
      duration: 3,
      skippable: false,
      order: 5
    }, {
      id: 44,
      template_plan_id: 4,
      name: 'Get to destination',
      duration: 8,
      skippable: false,
      order: 6
    },{
      id: 45,
      template_plan_id: 5,
      name: 'Feed pets',
      duration: 3,
      skippable: false,
      order: 1
    },{
      id: 46,
      template_plan_id: 5,
      name: 'Feed Kids',
      duration: 15,
      skippable: false,
      order: 2
    },{
      id: 47,
      template_plan_id: 5,
      name: 'Make Coffee',
      duration: 5,
      skippable: true,
      order: 3
    },{
      id: 48,
      template_plan_id: 5,
      name: 'Watch Cartoons',
      duration: 60,
      skippable: false,
      order: 4
    },{
      id: 49,
      template_plan_id: 6,
      name: 'Feed pets',
      duration: 3,
      skippable: false,
      order: 1
    },{
      id: 50,
      template_plan_id: 6,
      name: 'Feed kids',
      duration: 15,
      skippable: false,
      order: 2
    },{
      id: 51,
      template_plan_id: 6,
      name: 'Make Coffee',
      duration: 5,
      skippable: true,
      order: 3
    },{
      id: 52,
      template_plan_id: 6,
      name: 'Watch Cartoons',
      duration: 30,
      skippable: false,
      order: 4
    },{
      id: 53,
      template_plan_id: 7,
      name: 'Feed pets',
      duration: 3,
      skippable: false,
      order: 1
    },{
      id: 54,
      template_plan_id: 7,
      name: 'Make Coffee',
      duration: 5,
      skippable: true,
      order: 2
    },{
      id: 55,
      template_plan_id: 7,
      name: 'Watch Cartoons',
      duration: 60,
      skippable: false,
      order: 3
    },{
      id: 56,
      template_plan_id: 8,
      name: 'Take a Shower',
      duration: 10,
      skippable: true,
      order: 1
    },{
      id: 57,
      template_plan_id: 8,
      name: 'Make Coffee',
      duration: 3,
      skippable: true,
      order: 2
    },{
      id: 58,
      template_plan_id: 8,
      name: 'Do whatever you want',
      duration: 3,
      skippable: false,
      order: 3
    }

  ]).then(() => {
    return knex.raw(`SELECT setval('template_items_id_seq', (SELECT MAX(id) FROM template_items));`)
  })
}
