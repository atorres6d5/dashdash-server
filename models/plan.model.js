const db = require('../db/knex')
const Model = require('./model')('plans') //plans is the table name

class PlanModel extends Model{
    
  static allPlanItems (planId, userId) {
    return db('plans')
    .select('items.id as id', 'plan_id', 'items.name as name', 'duration', 'skippable', 'order')
    .orderBy('order')
    .where({ user_id: userId, plan_id: planId })
    .join('items', 'plans.id', 'plan_id')
  }
  
  static createPlanItem (body, planId) {
    return db('items')
    .where({ plan_id: planId })
    .max('order')
    .first()
    .then(result => {
      body.plan_id = planId
      body.order = result.max + 1 //create new item at end of list order
      return db('items')
      .insert(body)
      .returning('*')
    })
    .then(([ result ]) => result)
  }

  static updatePlanItem (planId, body, itemId) {
    body.plan_id = planId // prevent malicious body request from changing attached plan
    return db('items')
    .where({ plan_id: planId, id: itemId })
    .update(body)
    .returning('*')
    .then(([ result ]) => result)  
  }

  static destroyPlanItem (planId, itemId) {
    return db('items')
    .where({ plan_id: planId, id: itemId })
    .delete()  
  }

}

module.exports = PlanModel
