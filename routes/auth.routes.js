const express = require('express')
const router = express.Router()
const { AuthController } = require(`../controllers`)

// Authentication
router.post('/signup', AuthController.signup) // new users should only be created through signup
router.post('/login', AuthController.login)

module.exports = router
