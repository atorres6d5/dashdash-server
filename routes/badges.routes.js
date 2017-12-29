const router = require('express').Router()
const { AuthController, BadgesController } = require(`../controllers`)

// Get all badges (not protected)
// returns a key/value object with an array of objects { Badges: [{}, {}] }
router.get('/', BadgesController.index)

// Get one badge (not protected)
// returns a key/value object { Badge: {} }
router.get('/:id', BadgesController.show)

// Get all badges for a user (requires token)
// Requires a header with 'authorization' key with a string value that is 'Bearer ' followed by the token value
// Example: { authorization: 'Bearer eyJhbGciOiJIUz.I1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiO' }
//   (please note this is not an actual token)
// returns a key/value object with an array of objects { Badges: [{}, {}] }
router.get('/user/:userId', AuthController.isThisUser, BadgesController.showAllForUser)

module.exports = router
