const Controller = require('./controller')('Plan') //Plan is the model name
const { PlanModel } = require('../models')

class PlansController extends Controller {

  static getPlanItems (req, res, next) {
    PlanModel.allPlanItems(req.params.id, req.params.userId)
    .then(response => res.status(200).json({ Items: response }))
    .catch(next)
  }

  static createPlanItem (req, res, next) {

  }

  static updatePlanItems (req, res, next) {

  }

  static deletePlanItem (req, res, next) {

  }

}

module.exports = PlansController