module.exports = {
  oauth: {
    clientId: process.env.oauthClientId || '',
    clientSecret: process.env.oauthClientSecret || '',
    callbackURL: process.env.oauthCallbackURL || 'http://localhost:4000/oauth/callback'
  },
  ui: {
    host: process.env.UIHost || 'http://localhost:4000'
  }
}
