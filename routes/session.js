const express = require('express')
const router = express.Router()

const structures = require('../structures')

router.get('/', structures.session.main)
router.get('/revoke', structures.session.destory)
router.get('/guest', structures.session.guest)

router.use(structures.page.notFound)

module.exports = router
