// import Task model
const Task = require('../models/task')

// craete new task
const createTask = async (req, res) => {
  try {
    // get all data from request body
    const { title, description, status, tag } = req.body

    // use create method from Task model
    const task = await Task.create({ title, description, status, tag })

    // send back newly created task as response
    res.json({ task })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// fetch all tasks
const readTasks = async (req, res) => {
  try {
    // use find method from Task model
    const tasks = await Task.find()

    // send back all tasks as response
    res.json({ tasks })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// fetch one task
const readOneTask = async (req, res) => {
  try {
    // get task id from request params
    const taskID = req.params.id

    // find task
    const task = await Task.findById(taskID)

    // send back task as response
    res.json({ task })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// update task
const updateTask = async (req, res) => {
  try {
    // get task id from request params
    const taskID = req.params.id

    // get all data from request body
    const { title, description, status, tag } = req.body

    // find & update task
    await Task.findOneAndUpdate({ _id: taskID }, { title, description, status, tag })

    // find updated task
    const task = await Task.findById(taskID)

    // send back updated task as response
    res.json({ task })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// delete task
const deleteTask = async (req, res) => {
  try {
    // get task id from request params
    const taskID = req.params.id

    // find & delete task
    await Task.deleteOne({ _id: taskID })

    // send back success as response
    res.json({ message: 'Task succesfully deleted' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = { createTask, readTasks, readOneTask, updateTask, deleteTask }
