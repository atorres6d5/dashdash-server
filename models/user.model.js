const Model = require('./model')('users') //users is the table name
const db = require('../db/knex')
const bcrypt = require('bcryptjs')

class UserModel extends Model {
  
  static getUserIdByEmail (email) {
    return db('users')
    .select('id')
    .where({ email })
    .first()
  }
  
}

module.exports = UserModel
