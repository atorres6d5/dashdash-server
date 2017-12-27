function processErrorMessage(err) {
  /* This selectively prints errors to the server and client. In the default case, where the error comes from a function such as knex, etc. where sending details to the client may be a security concern, we send a generic message to the client while printing the details on the server. This process also helps prevent the continued execution of chained promises after an error is thrown. */
  if (err.message) {
    switch (err.message) {
      case 'cannotDeleteAdmin': return { status: 403, message: 'Administrator accounts cannot be deleted' }
      case 'duplicateUser': return { status: 409, message: 'A user with this email address already exists' }
      case 'incorrectRoleType': return { status: 400, message: "Role attribute must be either 'admin' or 'user'" }
      case 'invalidPassword': return { status: 401, message: 'Incorrect password' }
      case 'invalidToken': return { status: 401, message: 'A valid authorization token is required' }
      case 'missingFirstname': return { status: 400, message: 'First name is required' }
      case 'missingLastname': return { status: 400, message: 'Last name is required' }
      case 'missingPassword': return { status: 400, message: 'A password is required' }
      case 'missingRole': return { status: 400, message: 'Role attribute is required'}
      case 'missingUsername': return { status: 400, message: 'A username is required' }
      case 'noSuchUser': return { status: 404, message: 'This user does not exist' }
      case 'noSuchTemplate': return { status: 404, message: 'This template does not exist' }
      case 'noSuchPlan': return { status: 404, message: 'This plan does not exist' }
      case 'noSuchItem': return { status: 404, message: 'This item does not exist' }
      case 'noSuchBadge': return { status: 404, message: 'This badge does not exist' }
      case 'requestorInvalid': return { status: 401, message: 'Requestor is not a valid user' }
      case 'unauthorizedUser': return { status: 401, message: 'User is not authorized to access this resource' }
      default:
        console.log(err)
        return { status: 500, message: 'Our apologies, but an internal server error has occurred' }
    }
  }
}

module.exports = processErrorMessage
