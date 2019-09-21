const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    config: req.app.get('config')
  })
})

module.exports = router
