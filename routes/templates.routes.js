const router = require('express').Router()
const { TemplatesController } = require('../controllers')

// returns a key/value object with an array of objects { Templates: [{}, {}] }
router.get('/', TemplatesController.index)

// returns a key/value object { Template: {} }
router.get('/:id', TemplatesController.show)

// Get all items for a template
// returns a key/value object with an array of objects { TemplateItems: [{}, {}] }
router.get('/:id/items/', TemplatesController.getPlanItems)

module.exports = router
