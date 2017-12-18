function processErrorMessage(err) {
  /* This selectively prints errors to the server and client. In the default case, where the error comes from a function such as knex, etc. where sending details to the client may be a security concern, we send a generic message to the client while printing the details on the server. This process also helps prevent the continued execution of chained promises after an error is thrown. */
  if (err.message) {
    switch (err.message) {
      case 'invalidPassword': return { status: 401, message: 'Incorrect password' }
      case 'invalidToken': return { status: 401, message: 'A valid authorization token is required' }
      case 'missingPassword': return { status: 400, message: 'A password is required' }
      default:
        console.log(err)
        return { status: 500, message: 'Our apologies, but an internal server error has occurred' }
    }
  }
}

module.exports = processErrorMessage
