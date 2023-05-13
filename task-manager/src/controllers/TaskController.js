// Imports
const Task = require('./../models/TaskModel');


// Controllers
const createTask = async(req, res) => {
    const task = new Task(req.body)

    await task.save()
        .then((task) => {
            res.send(task)
        })
        .catch((err) => {
            console.log('Error saving task: ', err.message)
        })
}


const getAllTasks = async(req, res) => {
    await Task.find()
        .then((tasks) => {
            res.send(tasks)
        })
        .catch((err) => {
            res.status(500).send('Error getting tasks', err.message)
        })
}


const getTask = async(req, res) => {
    const taskId = req.params.taskId

    await Task.findById(taskId)
        .then((task) => {
            if (!task) {
                res.status(404).send('Task not found')
            }
            res.send(task)
        })
        .catch((err) => {
            res.status(500).send('Error getting task', err.message)
        })
}


const updateTask = async(req, res) => {
    const taskId = req.params.taskId

    const description = req.body.description
    await Task.findByIdAndUpdate(taskId, { description: description }, { new: true, runValidators: true })
        .then((task) => {
            if (!task) {
                res.status(404).send('Task not found')
            }
            res.send(task)
        }).catch((err) => {
            res.status(500).send('Error updating task', err.message)
        })
}

const deleteTask = async(req, res) => {
    const taskId = req.params.taskId

    await Task.findByIdAndDelete(taskId)
        .then((task) => {
            if (!task) {
                res.status(404).send('Task not found')
            }
            res.send(task)
        }).catch((err) => {
            res.status(500).send('Error deleting task', err.message)
        })
}


// Exports
module.exports = {
    createTask,
    getTask,
    getAllTasks,
    updateTask,
    deleteTask
}