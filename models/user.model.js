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
  
}

module.exports = UserModel
