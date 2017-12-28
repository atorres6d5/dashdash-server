exports.seed = function(knex, Promise) {
  return knex('badges_users').insert([
    { user_id: 1, badge_id: 1 },
    { user_id: 1, badge_id: 4 },
    { user_id: 2, badge_id: 1 },
    { user_id: 2, badge_id: 3 },
    { user_id: 3, badge_id: 1 },
    { user_id: 3, badge_id: 5 },
    { user_id: 3, badge_id: 4 },
    { user_id: 4, badge_id: 1 }
  ])
}
