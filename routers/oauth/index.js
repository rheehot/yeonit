const Router = require('koa-router')

const callback = require('./callback')
const request = require('./request')

const router = new Router()

router.get('/callback', callback)
router.get('/request', request)

module.exports = router.routes()
