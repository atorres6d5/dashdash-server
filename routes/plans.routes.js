const router = require('express').Router()
const { AuthController, PlansController } = require('../controllers')

router.get('/', AuthController.isAdmin, PlansController.index)
router.get('/:id', PlansController.show)
router.post('/', PlansController.create)
router.put('/:id', PlansController.update)
router.delete('/:id', PlansController.destroy)

module.exports = router
