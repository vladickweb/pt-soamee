const router = require('express').Router()
const apiRoutes = require('../api/api.routes')

router.use('/', apiRoutes)

module.exports = router
