const db = require('../db/knex')
const Model = require('./model')('template_plans') //template_plans is the table name

class TemplateModel extends Model{
  
  static allPlanItems (planId) {
    return db('template_items')
    .where({ template_plan_id: planId })
  }

}

module.exports = TemplateModel
