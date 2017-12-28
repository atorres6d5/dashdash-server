const router = require('express').Router()
const { AuthController, BadgesController } = require(`../controllers`)

// Get all badges (not protected)
router.get('/', BadgesController.index)

// Get one badge (not protected)
router.get('/:id', BadgesController.show)

// Get all badges for a user (requires token)
router.get('/user/:userId', AuthController.isThisUser, BadgesController.showAllForUser)

module.exports = router
