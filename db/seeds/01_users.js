exports.seed = function(knex, Promise) {
  // Inserts sample users
  // Plain text password for all sample users is 'password'
  return knex('users').insert([
    { id: 1, first_name: 'Admin', last_name: 'Istrator', email: 'admin@gmail.com', role: 'admin', children: true, pets: true },
    { id: 2, first_name: 'Rando', last_name: 'Ipsum', email: 'babbles@gmail.com', children: false, pets: false },
    { id: 3, first_name: 'Theon', last_name: 'Greyjoy', email: 'reek@gmail.com', children: false, pets: true },
    { id: 4, first_name: 'Mother', last_name: 'Hubbard', email: 'goose@gmail.com', children: true, pets: true },
    { id: 5, first_name: 'Flash', last_name: 'Mulligan', email: 'zippy@gmail.com', children: true, pets: false }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
  })
}
