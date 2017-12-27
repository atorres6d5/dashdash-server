const router = require('express').Router()
const { BadgesController } = require(`../controllers`)
// const [AuthController] = require(`../controllers/`)

router.get('/', BadgesController.index)
router.get('/:id', BadgesController.show)

module.exports = router
