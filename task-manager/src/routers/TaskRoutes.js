// Importins
const express = require('express')


// Test Controllers
const {
    createTask,
    getAllTasks,
    getTask,
    updateTask,
    deleteTask
} = require('./../controllers/TaskController')


// Express router
const taskRouter = express.Router()
taskRouter.get('/', getAllTasks)
taskRouter.get('/:taskId', getTask)
taskRouter.post('/', createTask)
taskRouter.patch('/:taskId', updateTask)
taskRouter.delete('/:taskId', deleteTask)


// Exports
module.exports = taskRouter