// Importing express
const express = require('express')

const {
    createTask,
    getAllTasks,
    getTask
} = require('./../controllers/Task')


// Creating express router
const taskRouter = express.Router()

// Task Route
// creating a new Task
taskRouter.post('/', createTask)

// Getting all tasks
taskRouter.get('/', getAllTasks)

// Getting a single task
taskRouter.get('/:taskId', getTask)

module.exports = taskRouter