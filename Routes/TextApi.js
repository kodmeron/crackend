const express = require('express')
const router = express.Router()
const textRoute = require('../api/controller.cjs')

router.get("/", textRoute.appTitle)



module.exports = router