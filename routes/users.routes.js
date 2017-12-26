const express = require('express')
const router = express.Router()
const { AuthController, UsersController } = require('../controllers')

// Creating a user should be done though auth/signup route

// Edit user
// Change user profile
router.put('/:id', AuthController.isUser, UsersController.update)
// Change user role
router.put('/promote/:id', AuthController.isAdmin, UsersController.changeRole)

// View users
// View user by token (this gets the current user)
router.get('/fromToken', UsersController.showOneFromToken)
// View all users (admin function)
router.get('/', AuthController.isAdmin, UsersController.index)
// View user by id route (admin function)
router.get('/:id', AuthController.isAdmin, UsersController.show)

// Delete User (note, admin accounts cannot be deleted; they must be demoted first)
router.delete('/:id', AuthController.isAdmin, UsersController.destroy)

module.exports = router
