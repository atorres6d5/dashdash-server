const Controller = require('./controller')('User') //User is the model name
const { TokenModel, UserModel } = require('../models')
const bcrypt = require('bcryptjs')

class UsersController extends Controller {

  static showOneFromToken (req, res, next) {
    // Validate and decode token
    Token.verifyAndExtractHeaderToken(req.headers)
    .catch(err => { throw new Error('invalidToken') })
    // Check for and retrieve user from database
    .then(token => UserModel.find(token.sub.id))
    .then(response => {
      if (!response) throw new Error('noSuchUser')
      return res.status(200).json({ user: response })
    })
    .catch(next)
  }

  static update (req, res, next) {
    // *** Editing profile data can only be done by the user whose id we are updating ***
    const id = req.params.id
    const { first_name, last_name, email, password } = req.body
    // If email was changed, verify no duplicates
    if (email) {
      UserModel.getUserIdByEmail(email)
      .then(existingUser => {
        if (existingUser) throw new Error('duplicateUser')
      })
      // Update user profile with supplied data
      .then(() => UserModel.update(id, first_name, last_name, email, password))
      .then(userId => res.status(200).json({ response: userId }))
      .catch(next)
    } else {
      // Update user profile with supplied data
      UserModel.update(id, first_name, last_name, undefined, password)
      .then(userId => res.status(200).json({ response: userId }))
      .catch(next)
    }
  }

  static destroy (req, res, next) {
    // *** Deleting a user requires either role of 'admin' or the user who's id we are requesting ***
    // Admin accounts cannot be deleted
    const id = req.params.id
    UserModel.getUser(id)
    .then(response => {
      if (response.role === 'admin') throw new Error('cannotDeleteAdmin')
    })
    // Delete user
    .then(() => UserModel.destroy(id))
    .then(response => res.status(204).json())
    .catch(next)
  }

  

  static changeRole (req, res, next) {
    // An 'admin' token is required to change the role of another user
    const id = req.params.id
    const role = req.body.role
    if (!role) throw new Error('missingRole')
    if (role !== 'admin' && role !== 'user') throw new Error('incorrectRoleType')
    // Update role of user in db
    UserModel.update(id, undefined, undefined, undefined, undefined, role)
    .then(userId => {
      if (!userId) throw new Error('noSuchUser')
      return res.status(200).json({ response: userId })
    })
    .catch(next)
  }
}

module.exports = UsersController
