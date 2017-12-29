const router = require('express').Router()
const { AuthController, PlansController } = require('../controllers')

// Get *ALL* plans; this is Admin only
router.get('/', AuthController.isAdmin, PlansController.index)

// Get a specific plan; this is admin only
router.get('/:id', AuthController.isAdmin, PlansController.show)

// Get all plans for user (token must match user)
router.get('/users/:userId', AuthController.isThisUser, PlansController.index)

// Get a specific plan for a user (token must match user)
router.get('/:id/users/:userId', AuthController.isThisUser, PlansController.show)

// Get all items for a plan for a user (token must match user)
router.get('/:id/users/:userId/items/', AuthController.isThisUser, PlansController.getPlanItems)

// Create plan for a user (token must match user)
router.post('/users/:userId', AuthController.isThisUser, PlansController.create)

// Create an item for a plan (for the current user token)
router.post('/:id/items/', AuthController.ownsThisPlan, PlansController.createPlanItem)

// Update plan for a user (token must match user)
router.put('/:id/users/:userId', AuthController.isThisUser, PlansController.update)

// Update item in a plan (for the current user token)
router.put('/:id/items/:itemId', AuthController.ownsThisPlan, PlansController.updatePlanItem)

// Delete plan (for the current user token)
router.delete('/:id', AuthController.ownsThisPlan, PlansController.destroy)
// router.delete('/:id/user/:userId', AuthController.isThisUser, PlansController.destroy)

// Delete item in a plan (for the current user token)
router.delete('/:id/items/:itemId', AuthController.ownsThisPlan, PlansController.destroyPlanItem)

module.exports = router
