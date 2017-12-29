const Controller = require('./controller')('Plan') //Plan is the model name
const { PlanModel } = require('../models')

class PlansController extends Controller {

  static getPlanItems (req, res, next) {
    PlanModel.allPlanItems(req.params.id, req.params.userId)
    .then(response => res.status(200).json({ Items: response }))
    .catch(next)
  }

  static createPlanItem (req, res, next) {
    PlanModel.createPlanItem(req.body, req.params.id)
    .then(response => res.status(201).json({ Item: response }))
    .catch(next)
  }

  static updatePlanItem (req, res, next) {
    PlanModel.updatePlanItem(req.params.id, req.body, req.params.itemId)
      .then(response => res.status(200).json({ Item: response }))
      .catch(next)
  }

  static destroyPlanItem (req, res, next) {
    PlanModel.destroyPlanItem(req.params.id, req.params.itemId)
      .then(response => res.status(204).json()) //there is no response body with 204
      .catch(next)
  }

}

module.exports = PlansController