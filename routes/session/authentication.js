const express = require('express')
const passport = require('passport')

const handlers = require('../../handlers')

const router = express.Router()

router.get('/google', passport.authenticate('google', { scope: ['email', 'https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/plus.login'] }))
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/session' }), (req, res) => res.redirect('/app'))

router.use(handlers.page.notFound)

module.exports = router
