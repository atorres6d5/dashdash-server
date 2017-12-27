exports.seed = function(knex, Promise) {
  return knex('badges').insert([
    { id: 1, name: 'Newbie', description: 'Creating your first schedule', image: 'xxx', active: true },
    { id: 2, name: 'A Natural', description: 'Successfully navigating a schedule', image: 'xxx', active: true },
    { id: 3, name: 'Legend', description: 'Creating 4 schedules', image: 'xxx', active: true },
    { id: 4, name: 'Beastmaster', description: 'Including pets in a schedule', image: 'xxx', active: true },
    { id: 5, name: 'Punctuality Wizard', description: 'Completing five schedules in a row without missing a day', image: 'xxx', active: true }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('badges_id_seq', (SELECT MAX(id) FROM badges));`)
  })
}
