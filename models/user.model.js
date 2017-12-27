const Model = require('./model')('users') //users is the table name
const db = require('../db/knex')
const bcrypt = require('bcryptjs')

class UserModel extends Model {
  static getUserIdByUsername (username) {
    return db('users')
    .select('id')
    .where({ username })
    .first()
  }

  

  static create (first_name, last_name, email, password) { 
    const hashed_password = bcrypt.hashSync(password)
    return db('users')
    .insert({ first_name, last_name, email, hashed_password })
    // note that 'role' is automatically defaulted to 'user' by the db
    .returning(['id'])
  }
  
}

module.exports = UserModel
