const express = require('express')
const router = express.Router()

const handlers = require('../handlers')

router.use(handlers.session.validate)

router.get('/', handlers.app.main)

router.use(handlers.page.notFound)

module.exports = router
