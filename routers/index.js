const Router = require('koa-router')

const oauth = require('./oauth')
const ping = require('./ping')

const router = new Router()

router.use('/oauth', oauth)
router.get('/ping', ping)

module.exports = router
