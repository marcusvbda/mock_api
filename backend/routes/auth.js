let express = require('express')
let router = express.Router()
let accountController = require('../controllers/accountController')
let jwtMiddleware = require('../middlewares/jwtMiddleware')

router.post('/get_token', accountController.getToken)
router.post('/test', [jwtMiddleware], accountController.test)

module.exports = router