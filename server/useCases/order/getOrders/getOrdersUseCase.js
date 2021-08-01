const orderRepository = require('../../../repositories/orderRepository')

const getOrders = (req, res, ) => {
    const orders = orderRepository.getAllOrders()
    res.status(200).json({
        data: orders
    })
}

module.exports = {
    getOrders
}