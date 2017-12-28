const db = require('../db/knex')
const Model = require('./model')('plans') //plans is the table name

class PlanModel extends Model{
    
  static allPlanItems (planId, userId) {
    return db('plans')
    .select('items.id as id', 'plan_id', 'items.name as name', 'duration', 'skippable', 'order')
    .where({ user_id: userId, plan_id: planId })
    .join('items', 'plans.id', 'plan_id')
  }
  
}

module.exports = PlanModel
