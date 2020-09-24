const express = require('express')
const router = express.Router()
const loginController = require('../controllers/login.controller')

router.get('/', loginController.index)

router.post('/', loginController.postLogin)

module.exports = router