const express = require('express')
const router = express.Router()

const uuidv1 = require('uuid/v1')

router.get('/', function(res, res, next) {
  res.render('session', { title: '로그인' })
})
router.get('/revoke', function(req, res, next) {
  req.session.destory()
  res.redirect('/')
})
router.get('/guest', function(req, res, next) {
  req.session.uid = uuidv1()

  res.redirect('/app')
})

router.use(function(req, res, next) {
  res.status(404).end()
})

module.exports = router
