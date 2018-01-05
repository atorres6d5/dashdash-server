const router = require('express').Router()
const { AuthController, PlansController } = require('../controllers')

// VIEWS
// Get *ALL* plans; this is Admin only
// requires a token for an admin
// returns a key/value object with an array of objects { Plans: [{}, {}] }
router.get('/', AuthController.isAdmin, PlansController.index)

// Get a specific plan; this is admin only
// requires a token for an admin
// returns a key/value object { Plan: {} }
router.get('/:id', AuthController.isAdmin, PlansController.show)

// Get all plans for user (token must match user)
// requires a token for the user
// returns a key/value object with an array of objects { Plans: [{}, {}] }
router.get('/users/:userId', AuthController.isThisUser, PlansController.index)

// Get a specific plan for a user (token must match user)
// requires a token for the user
// returns a key/value object { Plan: {} }
router.get('/:id/users/:userId', AuthController.isThisUser, PlansController.show)

// Get all items for a plan for a user (token must match user)
// requires a token for the user
// returns a key/value object with an array of objects { Items: [{}, {}] } in order
router.get('/:id/users/:userId/items/', AuthController.isThisUser, PlansController.getPlanItems)


// CREATES
// Create plan for a user (token must match user)
// requires a token for the user and a body { name, active, start_time, deadline, days_to_run }
// returns the created item { Plan: {} }
router.post('/users/:userId', AuthController.isThisUser, PlansController.create)

// Create an item for a plan (for the current user token)
// requires a token for the user and a body { name, duration, skippable }
// note that 'order' is automatically assigned as the last in the list of items for that plan
// returns the created item { Item: {} }
router.post('/:id/items/', AuthController.ownsThisPlan, PlansController.createPlanItem)


// UPDATES
// Update plan for a user (token must match user)
// requires a token for the user and a body { name, active, successes, runs, start_time, deadline, days_to_run }
// returns the updated item { Plan: {} }
router.put('/:id/users/:userId', AuthController.isThisUser, PlansController.update)

// Update item in a plan (for the current user token)
// requires a token for the user and a body { name, duration, skippable, order }
// returns the updated item { Item: {} }
router.put('/:id/items/:itemId', AuthController.ownsThisPlan, PlansController.updatePlanItem)


// DESTROYS
// Delete plan (for the current user token)
// requires a token for the user who owns the resource
// returns no message (only the 204 status code)
router.delete('/:id', AuthController.ownsThisPlan, PlansController.destroy)
// router.delete('/:id/user/:userId', AuthController.isThisUser, PlansController.destroy)

// Delete item in a plan (for the current user token)
// requires a token for the user who owns the resource
// returns no message (only the 204 status code)
router.delete('/:id/items/:itemId', AuthController.ownsThisPlan, PlansController.destroyPlanItem)

module.exports = router
