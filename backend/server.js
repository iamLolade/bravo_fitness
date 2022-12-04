require('dotenv').config()

const express = require('express')

// Express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log('Test', req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({msg: 'Back to fullstack'})
})

// Listen for requests
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})