const express = require('express')
const router = express.Router()
const { AuthController } = require(`../controllers`)

// AUTHENTICATION
// Signup
// requires a body with { email, password, first_name, last_name }
// adds a user and returns that user's token in a key/value object { Auth: token }
router.post('/signup', AuthController.signup) // new users should only be created through signup

// Login
// requires a body with { email, password }
// returns that user's token in a key/value object { Auth: token }
router.post('/login', AuthController.login)

// Update password
// Requires a header with 'authorization' key with a string value that is 'Bearer ' followed by the token value
// Example: { authorization: 'Bearer eyJhbGciOiJIUz.I1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiO' }
//   (please note this is not an actual token)
// returns the user id on success
router.put('/updatepassword', AuthController.updatePassword)

module.exports = router
