require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()     
app.use(cors())
app.use(express.json())

require('./database/config')

const orderRoutes = require('./routes/order')

app.use('/api', orderRoutes)

app.listen( process.env.PORT, () => {
    console.log('Server is running in port ', process.env.PORT)
} )

module.exports = app