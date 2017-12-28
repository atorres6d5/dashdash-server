const router = require('express').Router()
const { TemplatesController } = require('../controllers')
// const AuthController = require(`../controllers/auth.js`)

router.get('/', TemplatesController.index)
router.get('/:id', TemplatesController.show)
// Get all items for a template
router.get('/:id/items/', TemplatesController.getPlanItems)

module.exports = router
