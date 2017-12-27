const express = require('express')
const router = express.Router()
const { AuthController, UsersController } = require('../controllers')

// CREATE USER
// Should be done though auth/signup route

// VIEW USERS
// View user by token (this gets the current user)
router.get('/fromToken', UsersController.showOneFromToken)
// View all users (admin function)
router.get('/', AuthController.isAdmin, UsersController.index)
// View user by id route (admin function)
router.get('/:id', AuthController.isAdmin, UsersController.show)

// EDIT USER
// Change user profile
router.put('/:id', AuthController.isUser, UsersController.update)
// Change user role
router.put('/promote/:id', AuthController.isAdmin, UsersController.changeRole)

// DELETE USER
// (note, admin accounts cannot be deleted; they must be demoted first)
router.delete('/:id', AuthController.isAdmin, UsersController.destroy)

module.exports = router
