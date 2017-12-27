const router = require('express').Router()
const { PlansController } = require('../controllers')
// const AuthController = require(`../controllers/auth.js`)

router.get('/', PlansController.index)
router.get('/:id', PlansController.show)

module.exports = router
