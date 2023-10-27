// import dependencies
const express = require('express')
const taskControllers = require('../controllers/taskControllers')

// create express router
const router = express.Router()

// route handlers
router.post('/', taskControllers.createTask)
router.get('/', taskControllers.readTasks)
router.get('/:id', taskControllers.readOneTask)
router.put('/:id', taskControllers.updateTask)
router.delete('/:id', taskControllers.deleteTask)

module.exports = router
