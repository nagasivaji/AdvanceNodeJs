// Importing Task model
const Task = require('./../models/Task');

// Task Route
// creating a new Task
const createTask = async(req, res) => {
    const task = new Task(req.body)

    await task.save().then((task) => {
            console.log(task)
            res.send(task)
        })
        .catch((err) => {
            console.log('Error saving task: ', err.message)
        })
}

// Getting all tasks
const getAllTasks = async(req, res) => {
    console.log('Getting all tasks')
    await Task.find().then((tasks) => {
            console.log(tasks)
            res.send(tasks)
        })
        .catch((err) => {
            console.log('Error getting tasks: ', err.message)
            res.status(500).send('Error getting tasks')
        })
}

// Getting a single task
const getTask = async(req, res) => {
    const taskId = req.params.taskId

    await Task.findById(taskId).then((task) => {
            console.log(task)
            if (!task) {
                res.status(404).send('Task not found')
            }
            res.send(task)
        })
        .catch((err) => {
            console.log('Error getting task: ', err.message)
            res.status(500).send('Error getting task')
        })
}

module.exports = {
    createTask,
    getTask,
    getAllTasks,
}