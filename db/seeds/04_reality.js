exports.seed = function(knex, Promise) {
  return knex('reality').insert([
    { id: 1, item_id: 1, start_time: '08:00:00', actual_duration: '00:02:12' },
    { id: 2, item_id: 6, start_time: '09:05:05', actual_duration: '00:04:36' },
    { id: 3, item_id: 2, start_time: '08:02:12', actual_duration: '00:07:00' },
    { id: 4, item_id: 3, start_time: '08:09:12', actual_duration: '00:03:20' },
    { id: 5, item_id: 5, start_time: '09:00:05', actual_duration: '00:05:00' },
    { id: 6, item_id: 4, start_time: '08:12:32', actual_duration: '00:09:58' }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('reality_id_seq', (SELECT MAX(id) FROM reality));`)
  })
}