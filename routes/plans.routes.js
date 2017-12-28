const router = require('express').Router()
const { AuthController, PlansController } = require('../controllers')

router.get('/', AuthController.isAdmin, PlansController.index)
router.get('/:id', AuthController.ownsThisPlan, PlansController.show)
router.post('/', AuthController.ownsThisPlan, PlansController.create)
router.put('/:id', AuthController.ownsThisPlan, PlansController.update)
router.delete('/:id', AuthController.ownsThisPlan, PlansController.destroy)

module.exports = router
