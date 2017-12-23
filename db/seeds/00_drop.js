exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reality').del()
    .then(() => knex('items').del())
    .then(() => knex('plans').del())
    .then(() => knex('badges').del())
    .then(() => knex('auth').del())
    .then(() => knex('users').del())
    .then(() => knex('template_items').del())
    .then(() => knex('template_plans').del())
}
