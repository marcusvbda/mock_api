let express = require('express')
let router = express.Router()
let routesController = require('../controllers/routesController')
let jwtMiddleware = require('../middlewares/jwtMiddleware')

router.post('/list', [jwtMiddleware], routesController.index)

module.exports = router