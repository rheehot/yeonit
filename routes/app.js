const express = require('express')
const router = express.Router()

const structures = require('../structures')

router.use(structures.session.validate)

router.get('/', function(req, res, next) {
  res.render('app')
})

router.use(structures.page.notFound)

module.exports = router
