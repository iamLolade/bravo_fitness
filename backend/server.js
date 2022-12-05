require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log('Test', req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connect to database')
        // listen for requests
        const port = process.env.PORT
        app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

