const querystring = require('querystring')

const { oauth } = require('../../config')

module.exports = async ctx => {
  const payload = {
    client_id: oauth.clientId,
    redirect_uri: oauth.callbackURL,
    response_type: 'token',
    scope: [
      'openid',
      'profile',
      'email'
    ],
    prompt: 'select_account'
  }

  ctx.redirect('https://accounts.google.com/o/oauth2/v2/auth?' + querystring.stringify(payload))
}
