const express = require('express')
const router = express.Router()

const handlers = require('../handlers')
const middlewares = require('../middlewares')

router.use(middlewares.session.ensureAuthenticated)

router.get('/', handlers.app.main)

router.use(handlers.page.notFound)

module.exports = router
