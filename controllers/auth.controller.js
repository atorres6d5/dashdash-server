const Controller = require('./controller')('Auth') //Auth is the model name
const { AuthModel, UserModel, TokenModel, PlanModel } = require('../models')
const bcrypt = require('bcryptjs')

class AuthController extends Controller {

  // Verify requestor is a user (includes admins)
  static isUser (req, res, next) {
    // Validate and decode token
    TokenModel.verifyAndExtractHeaderToken(req.headers)
    .catch(err => { throw new Error('invalidToken') })
    // Check for and retrieve user from database
    .then(token => UserModel.find(token.sub.id))
    // Verify user
    .then(user => {
      if (!user) throw new Error('requestorInvalid')
      next() // pass auth check
    })
    .catch(next) // fail auth check
  }

  // Verify requestor is specifically an admin
  static isAdmin (req, res, next) {
    // Validate and decode token
    TokenModel.verifyAndExtractHeaderToken(req.headers)
    .catch(err => { throw new Error('invalidToken') })
    // Check for and retrieve user from database
    .then(token => UserModel.find(token.sub.id))
    // Verify user
    .then(user => {
      if (!user) throw new Error('requestorInvalid')
      if (user.role !== 'admin') throw new Error('unauthorizedUser')
      next() // pass auth check
    })
    .catch(next) // fail auth check
  }

  static isThisUser (req, res, next) {
    // Validate and decode token
    TokenModel.verifyAndExtractHeaderToken(req.headers)
    .catch(err => { throw new Error('invalidToken') })
    // Check for and retrieve user from database
    .then(token => UserModel.find(token.sub.id))
    // Verify user against userId from request
    .then(result => {
      const thisUser = result.id
      const requestedUser = req.params.userId
      if (!thisUser) throw new Error('requestorInvalid')
      if (thisUser != requestedUser) throw new Error('unauthorizedUser')
      next() // pass auth check
    })
    .catch(next) // fail auth check
  }

  static ownsThisPlan (req, res, next) {
    // Validate and decode token
    TokenModel.verifyAndExtractHeaderToken(req.headers)
    .catch(err => { throw new Error('invalidToken') })
    // Check for and retrieve user from database
    // Get plan id from req and retrieve plan
    .then(token => {
      const promises = [ UserModel.find(token.sub.id), PlanModel.find(req.params.id) ]
      return Promise.all(promises)
    })
    // Verify user against plan
    .then(results => {
      const userId = results[0].id
      const planOwner = results[1].user_id
      if (!userId) throw new Error('requestorInvalid')
      if (userId !== planOwner) throw new Error('unauthorizedUser')
      next() // pass auth check
    })
    .catch(next) // fail auth check
  }

  static login (req, res, next) {
    // *** Login requires email and password (no token), and will return a token ***
    // Get supplied email and password and grab user match from db
    const { email, password } = req.body
    if (!email) throw new Error('missingEmail')
    if (!password) throw new Error('missingPassword')
    // Retrieve user match from database
    UserModel.getUserIdByEmail(email)
    .then(result => {
      if (!result) throw new Error('noSuchUser')
      // Get hash from auth database
      return AuthModel.find(result.id)
    })
    .then(result => {
      // Check for supplied password match against stored hash
      if (!bcrypt.compareSync(password, result.hashed_password)) throw new Error('invalidPassword')
      // Sign new token with user id
      return TokenModel.sign(result.user_id)
    })
    // Return token to client
    .then(token => res.status(201).json({ Auth: token }))
    .catch(next)
  }

  static signup (req, res, next) {
    // *** Signup will create a new user; no token is required, however a token will be returned ***
    const { email, password, first_name, last_name } = req.body
    // Verify fields exist
    if (!email) throw new Error('missingEmail')
    if (!password) throw new Error('missingPassword')
    if (!first_name) throw new Error('missingFirstname')
    if (!last_name) throw new Error('missingLastname')
    // Verify that email is unique
    UserModel.getUserIdByEmail(email)
    .then(existingUser => {
      if (existingUser) throw new Error('duplicateUser')
      // If unique, add new user to users database; all new users created with role of 'user'
      const newUser = { email, first_name, last_name }
      return UserModel.create(newUser)
    })
    .then(newUser => {
      // Add hashed password to auth table
      const hashed_password = bcrypt.hashSync(password)
      return AuthModel.create({ user_id: newUser.id, hashed_password })
    })
    // Sign and return a token for the new user
    .then(result => TokenModel.sign(result.user_id))
    // Return token to client
    .then(token => res.status(201).json({ Auth: token }))
    .catch(next)
  }

  static updatePassword (req, res, next) {
    const { password } = req.body
    if (!password) throw new Error('missingPassword')
    const hashed_password = bcrypt.hashSync(password)
    // Validate and decode token
    TokenModel.verifyAndExtractHeaderToken(req.headers)
    .catch(err => { throw new Error('invalidToken') })
    // Update password in database based on user id in token
    .then(token => AuthModel.update(token.sub.id, { hashed_password }))
    .then(result => res.status(200).json({ Auth: result.user_id }))
    .catch(next)
  }

}

module.exports = AuthController