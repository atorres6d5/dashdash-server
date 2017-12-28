exports.seed = function(knex, Promise) {
  return knex('badges').insert([
    { id: 1, name: 'Newbie', description: 'Creating your first schedule', image: './img/badges/newbie.svg' },
    { id: 2, name: 'A Natural', description: 'Successfully navigating a schedule', image: './img/badges/natural.svg' },
    { id: 3, name: 'Legend', description: 'Creating 4 schedules', image: './img/badges/legend.svg' },
    { id: 4, name: 'Beastmaster', description: 'Including pets in a schedule', image: './img/badges/beastmaster.svg' },
    { id: 5, name: 'Punctuality Wizard', description: 'Completing five schedules in a row without missing a day', image: './img/badges/wizard.svg' },
    {id: 6, name: 'Skipper', description: 'Skipping more than one task', img: './img/badges/skipper.svg'},
    {id: 7, name: 'Late', description: 'Arrived late', img:'./img/badges/late.svg'}
  ])
  .then(() => {
    return knex.raw(`SELECT setval('badges_id_seq', (SELECT MAX(id) FROM badges));`)
  })
}
