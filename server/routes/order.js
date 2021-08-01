const express = require('express')
const router = express.Router()

const authentication = require('../middlewares/authentication')
const getOrdersUseCase = require('../useCases/order/getOrders')

router.post('/login/',  login.login)

router.get('/orders/',  [ authentication.verifyToken ], getOrdersUseCase.getOrders)

module.exports = router