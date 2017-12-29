const Controller = require('./controller')('Badge') //Badge is the model name
const { BadgeModel } = require('../models')

class BadgesController extends Controller {

  static showAllForUser (req, res, next) {
    BadgeModel.findForUser(req.params.userId)
    .then(response => res.status(200).json({ Badges: response }))
    .catch(next)
  }

}

module.exports = BadgesController