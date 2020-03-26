let express = require('express')
let router = express.Router()
let routesController = require('../controllers/routesController')
let jwtMiddleware = require('../middlewares/jwtMiddleware')

router.get('/list', [jwtMiddleware], routesController.index)
router.post('/store', [jwtMiddleware], routesController.store)
router.delete('/destroy/:id', [jwtMiddleware], routesController.destroy)

module.exports = router