exports.seed = function(knex, Promise) {
  return knex('badges_users').insert([
    { id: 1, user_id: 1, badge_id: 1},
    { id: 2, user_id: 1, badge_id: 4},
    { id: 3, user_id: 2, badge_id: 1},
    { id: 4, user_id: 2, badge_id: 3},
    { id: 5, user_id: 3, badge_id: 1},
    { id: 6, user_id: 3, badge_id: 5},
    { id: 7, user_id: 3, badge_id: 4},
    { id: 8, user_id: 4, badge_id: 1},
    { id: 9, user_id: 5, badge_id: 1},
  ])
  .then(() => {
    return knex.raw(`SELECT setval('badges_users_id_seq', (SELECT MAX(id) FROM badges_users));`)
  })
}
