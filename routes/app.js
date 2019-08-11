const express = require('express')
const router = express.Router()

const structures = require('../structures')

router.use(structures.session.validate)

router.get('/', structures.app.main)

router.use(structures.page.notFound)

module.exports = router
