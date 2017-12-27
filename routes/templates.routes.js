const router = require('express').Router()
const { TemplatesController } = require('../controllers')
// const AuthController = require(`../controllers/auth.js`)

router.get('/', TemplatesController.getTemplates)
router.get('/:id', TemplatesController.findTemplate)

module.exports = router
