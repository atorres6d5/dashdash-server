const express = require('express')
const router = express.Router()
const { AuthController, UsersController } = require('../controllers')

// CREATE USER
// Should be done though auth/signup route


// VIEW USERS
// View user by token (this gets the current user)
// requires a token and will return an object for that user { User: {} }
router.get('/fromToken', UsersController.showOneFromToken)

// View all users (admin function)
// requires a token for an admin
// returns an object with an array of objects { Users: [{}, {}] }
router.get('/', AuthController.isAdmin, UsersController.index)

// View user by id route (admin function)
// requires a token for an admin
// returns an object { User: {} }
router.get('/:id', AuthController.isAdmin, UsersController.show)


// EDIT USER
// Change user profile
// requires a token for the user being changed and body with { email, first_name, last_name, children, pets }
// returns the user object { User: {} }
router.put('/:id', AuthController.isUser, UsersController.update)

// Change user role
// requires a token for an admin and body with { role }
// returns the changed user object { User: {} }
router.put('/promote/:id', AuthController.isAdmin, UsersController.changeRole)


// DELETE USER
// (note, admin accounts cannot be deleted; they must be demoted first)
// requires a token for an admin
// returns no message (only the 204 status code)
router.delete('/:id', AuthController.isAdmin, UsersController.destroy)

module.exports = router
