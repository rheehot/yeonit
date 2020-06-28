const fetch = require('node-fetch')
const querystring = require('querystring')

const {
  ui,
  oauth
} = require('../../config')

module.exports = async ctx => {
  const { code } = ctx.query

  const response = await fetch('https://oauth2.googleapis.com/token?' + querystring.stringify({
    client_id: oauth.clientId,
    client_secret: oauth.clientSecret,
    code,
    grant_type: 'authorization_code',
    redirect_uri: oauth.callbackURL
  }))
  const { access_token: accessToken } = await response.json()

  if (accessToken) {
    ctx.redirect(ui.host + '/profile')
  } else {
    ctx.redirect(ui.host + '/authenticateError')
  }
}
