exports.seed = function(knex, Promise) {
  return knex('plans').insert([
    { id: 1, user_id: 1, name: 'Bespin Wakeup', active: true, successes: 2, runs: 3, start_time: '08:00:00', deadline: '08:21:30', days_to_run: 'M,T,W,Th,F', parent_plan: null },
    { id: 2, user_id: 1, name: 'Holocron Practice', active: true, successes: 0, runs: 4, start_time: '09:00:00', deadline: '09:05:00', days_to_run: 'Su,S', parent_plan: null },
    { id: 3, user_id: 2, name: 'Boche Practice', active: true, successes: 0, runs: 4, start_time: '09:00:00', deadline: '09:00:00', days_to_run: 'Su,S', parent_plan: null }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('plans_id_seq', (SELECT MAX(id) FROM plans));`)
  })
}
