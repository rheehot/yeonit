const express = require('express')
const router = express.Router()

router.use(function(req, res, next) {
  if (req.session.uid) {
    next()
  } else {
    res.redirect('/session')
  }
})

router.get('/', function(req, res, next) {
  res.render('app')
})

router.use(function(req, res, next) {
  res.status(404).end()
})

module.exports = router
