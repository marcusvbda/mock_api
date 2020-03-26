let express = require('express')
let router = express.Router()
let accountController = require('../controllers/accountController')

router.post('/get_token', accountController.getToken)

module.exports = router