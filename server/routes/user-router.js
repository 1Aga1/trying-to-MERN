const express = require('express')

const UserCtrl = require('../controllers/user-ctrl')

const router = express.Router()

router.get('reg')
router.post('/reg?')

module.exports = router