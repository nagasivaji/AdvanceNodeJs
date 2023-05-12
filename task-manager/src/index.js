// Importing express module
const express = require('express')

// Loading mongoose to connect with DB
require('./db/mongoose')

// Importing User model
const User = require('./models/User');

// Importing Task model
const Task = require('./models/Task');



// creatiing express app
const app = express()

// This will convert request type to jsson format
app.use(express.json())



// User Routes
// creating a new user
app.post('/users', (req, res) => {
    // console.log(req.body)

    // creating a new User
    const user = new User(req.body)

    // saving this user to mongodb
    user.save().then((user) => {
        console.log(user)
        res.send(user)
    }).catch((err) => {
        console.log('Error saving user: ', err.message)
            // console.log(err)
        res.status(500).send('Error saving user')
    })
})

// Getting all the users
app.get('/users', (req, res) => {
    User.find().then((users) => {
        console.log(users)
        res.send(users)
    }).catch((err) => {
        console.log('Error getting users: ', err.message)
        res.status(500).send('Error getting users')
    })
})

// Getting a single users
app.get('/users/:userId', (req, res) => {
    const userId = req.params.id

    User.findById(userId).then((user) => {
        console.log(user)
        if (!user) {
            res.status(404).send('No user found')
        }
        res.send(user)
    }).catch((err) => {
        console.log('Error getting users: ', err.message)
        res.status(500).send('Error getting users')
    })
})

// updating users
app.patch('/users/:userId', async(req, res) => {
    const userId = req.params.userId
    const userName = req.body.name
    console.log(userName)
    try {
        const user = await User.findByIdAndUpdate(userId, { name: userName }, { new: true, runValidators: true })
        console.log('User updated')
        if (!user) {
            res.status(404).send('No user found')
        }
        res.send(user)
    } catch (err) {
        console.log('Error updating users: ', err.message)
        res.status(500).send('Error updating users')
    }
})



/*  -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --  */


// Task Route
// creating a new Task
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then((task) => {
            console.log(task)
            res.send(task)
        })
        .catch((err) => {
            console.log('Error saving task: ', err.message)
        })
})

// Getting all tasks
app.get('/tasks', (req, res) => {
    Task.find().then((tasks) => {
            console.log(tasks)
            res.send(tasks)
        })
        .catch((err) => {
            console.log('Error getting tasks: ', err.message)
            res.status(500).send('Error getting tasks')
        })
})

// Getting a single task
app.get('/tasks/:taskId', (req, res) => {
    const taskId = req.params.taskId

    Task.findById(taskId).then((task) => {
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
})


// Getting port number for server to run
const port = process.env.PORT || 3000

// Listeing to server
app.listen(port, () => {
    console.log('Server listening on port: ' + port)
})