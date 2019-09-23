const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth')

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((obj, done) => done(null, obj))

module.exports = app => {
  passport.use(
    new GoogleStrategy.OAuth2Strategy(
      app.get('config').authentication.google,
      (accessToken, refreshToken, profile, done) => {
        process.nextTick(() => done(null, profile))
      }
    )
  )
}
