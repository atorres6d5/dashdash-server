exports.seed = function(knex, Promise) {
  // Inserts sample users
  // Plain text password for all sample users is 'password'
  return knex('users').insert([
    { id: 1, first_name: 'Admin', last_name: 'Istrator', username: 'admin', hashed_password: '$2a$10$x5BXBKwhjo.VCl8A/tuFfuLfEv8narDxPbvx6yMHlG.Y6EreIcCFa', role: 'admin', children: true, pets: true },
    { id: 2, first_name: 'Rando', last_name: 'Ipsum', username: 'babbles', hashed_password: '$2a$10$x5BXBKwhjo.VCl8A/tuFfuLfEv8narDxPbvx6yMHlG.Y6EreIcCFa', children: false, pets: false },
    { id: 3, first_name: 'Theon', last_name: 'Greyjoy', username: 'reek', hashed_password: '$2a$10$x5BXBKwhjo.VCl8A/tuFfuLfEv8narDxPbvx6yMHlG.Y6EreIcCFa', children: false, pets: true },
    { id: 4, first_name: 'Mother', last_name: 'Hubbard', username: 'goose', hashed_password: '$2a$10$x5BXBKwhjo.VCl8A/tuFfuLfEv8narDxPbvx6yMHlG.Y6EreIcCFa', children: true, pets: true },
    { id: 5, first_name: 'Flash', last_name: 'Mulligan', username: 'zippy', hashed_password: '$2a$10$x5BXBKwhjo.VCl8A/tuFfuLfEv8narDxPbvx6yMHlG.Y6EreIcCFa', children: true, pets: false }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
  })
}
