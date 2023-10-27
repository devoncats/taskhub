// import mongoose
const mongoose = require('mongoose')

// create connectDB function
async function connectDB () {
  try {
    // connect to MongoDB
    await mongoose.connect(process.env.URI)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}

module.exports = connectDB
