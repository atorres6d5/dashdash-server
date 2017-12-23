const express = require('express')
const router = express.Router()
const { UsersController } = require('../controllers')

// Creating a user should be done though auth/signup route

// Edit user
// Change user profile
router.put('/:id', AuthController.isOwnerOfUser, UsersController.update)
// Change user role
router.put('/promote/:id', AuthController.isAdmin, UsersController.changeRole)

// View users
// View user by token
router.get('/fromToken', UsersController.showOneFromToken)
// View all users
router.get('/', AuthController.isAdmin, UsersController.index)
// View user by id route (might not be needed?)
router.get('/:id', AuthController.isOwnerOfUserOrAdmin, UsersController.showOne)

// Delete User
router.delete('/:id', AuthController.isOwnerOfUserOrAdmin, UsersController.destroy)

module.exports = router
