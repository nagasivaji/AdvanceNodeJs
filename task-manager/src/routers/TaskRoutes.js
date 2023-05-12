// Importins
const express = require('express')


// Test Controllers
const {
    createTask,
    getAllTasks,
    getTask
} = require('./../controllers/TaskController')


// Express router
const taskRouter = express.Router()
taskRouter.get('/', getAllTasks)
taskRouter.get('/:taskId', getTask)
taskRouter.post('/', createTask)


// Exports
module.exports = taskRouter