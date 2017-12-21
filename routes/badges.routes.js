const router = require('express').Router()
const [BadgesController] = require(`../controllers`)
// const [AuthController] = require(`../controllers/`)

router.get('/', BadgesController.getBadges)
router.get('/:id', BadgesController.findBadge)

module.exports = router
