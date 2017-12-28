const db = require('../db/knex')
const Model = require('./model')('badges') //badges is the table name

class BadgeModel extends Model{
    
  static findForUser (userId) {
    return db('badges_users')
    .select('badge_id', 'name', 'description', 'image')
    .where({ user_id: userId })
    .join('badges', 'badge_id', 'badges.id')
  }

}

module.exports = BadgeModel
