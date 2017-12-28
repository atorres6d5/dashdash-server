exports.seed = function(knex, Promise) {
  // Inserts sample users
  // Plain text password for all sample users is 'password'
  return knex('users').insert([
    { id: 1, first_name: 'Admin', last_name: 'Istrator', username: 'admin', role: 'admin', children: true, pets: true },
    { id: 2, first_name: 'Rando', last_name: 'Ipsum', username: 'babbles', children: false, pets: false },
    { id: 3, first_name: 'Theon', last_name: 'Greyjoy', username: 'reek', children: false, pets: true },
    { id: 4, first_name: 'Mother', last_name: 'Hubbard', username: 'goose', children: true, pets: true },
    { id: 5, first_name: 'Flash', last_name: 'Mulligan', username: 'zippy', children: true, pets: false }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
  })
}
