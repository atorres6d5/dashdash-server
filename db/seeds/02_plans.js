exports.seed = function(knex, Promise) {
  return knex('plans').insert([
    { id: 1, user_id: 1, name: 'Bespin Wakeup', active: true, successes: 2, runs: 3, start_time: '08:00:00', days: 'MON,TUE,WED,THU,FRI', parent_plan: null },
    { id: 2, user_id: 1, name: 'Holocron Practice', active: true, successes: 0, runs: 4, start_time: '09:00:00', days: 'SUN,SAT', parent_plan: null }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('plans_id_seq', (SELECT MAX(id) FROM plans));`)
  })
}
