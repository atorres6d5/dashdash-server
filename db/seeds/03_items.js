exports.seed = function(knex, Promise) {
  return knex('items').insert([
    { id: 1, plan_id: 1, name: 'Decontaminate', duration: '00:01:00', snoozable: false, order: 1 },
    { id: 2, plan_id: 1, name: 'Nutrate', duration: '00:07:00', snoozable: true, order: 2 },
    { id: 3, plan_id: 1, name: 'Suit Up', duration: '00:03:30', snoozable: false, order: 3 },
    { id: 4, plan_id: 1, name: 'Mynock Check & Removal', duration: '00:10:00', snoozable: false, order: 4 },
    { id: 5, plan_id: 2, name: 'Enrobe', duration: '00:01:00', snoozable: true, order: 1 },
    { id: 6, plan_id: 2, name: 'Stretch', duration: '00:04:00', snoozable: false, order: 2 }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('items_id_seq', (SELECT MAX(id) FROM items));`)
  })
}