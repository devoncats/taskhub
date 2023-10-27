// import dependencies
const mongoose = require('mongoose')

// create task schema
const taskSchema = new(mongoose.Schema)({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'ongoing', 'completed'],
    default: 'pending'
  },
  tag: {
    type: String,
    enum: ['personal', 'work', 'others'],
    default: 'others'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

// create Task model
const Task = mongoose.model('Task', taskSchema)

module.exports = Task
