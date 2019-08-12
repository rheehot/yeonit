const express = require('express')
const router = express.Router()

const handlers = require('../handlers')

router.get('/', handlers.session.main)
router.get('/revoke', handlers.session.destory)
router.get('/guest', handlers.session.guest)

router.use(handlers.page.notFound)

module.exports = router
