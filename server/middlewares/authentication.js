const jwt = require('jsonwebtoken')

const verifyToken = function(req, res, next) {
    let token = req.get('token')
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(400).json({
                message: 'Invalid token'
            })
        }
        req.user = decoded.user
        next()
    })
}

module.exports = {
    verifyToken
}