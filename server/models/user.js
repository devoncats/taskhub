// import dependencies
const mongoose = require('mongoose')

// create user schema
const userSchema = new(mongoose.Schema)({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  },
  userDetails: {
    name: {
      type: String,
      required: false
    },
    position: {
      type: String,
      required: false
    },
    gender: {
      type: String,
      required: false
    },
    about: {
      type: String,
      required: false
    },
    localtion: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: false
    }
  },
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
})

// create user model
const user = mongoose.model('user', userSchema)

module.exports = user
