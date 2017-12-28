const Controller = require('./controller')('Template') //Template is the model name
const { TemplateModel } = require('../models')

class TemplatesController extends Controller {

  static getPlanItems (req, res, next) {
    TemplateModel.allPlanItems(req.params.id)
    .then(response => res.status(200).json({ Items: response }))
    .catch(next)
  }

}

module.exports = TemplatesController