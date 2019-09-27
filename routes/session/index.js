const express = require('express')

const handlers = require('../../handlers')

const router = express.Router()
const authenticationRouter = require('./authentication')

router.get('/', handlers.session.main)
router.get('/revoke', handlers.session.destory)
router.use('/authentication', authenticationRouter)

router.use(handlers.page.notFound)

module.exports = router
