// load env variables if not in production
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

// import dependencies
const express = require('express')
const taskRoutes = require('./routes/taskRoutes')
const connectDB = require('./config/db')

// create express app
const app = express()

// configure express app
app.use(express.json())

// connect to database
connectDB()

// route handlers
app.use('/tasks', taskRoutes)

// start server
app.listen(process.env.PORT)
