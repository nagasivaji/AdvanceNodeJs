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
app.post('/users', (req, res) => {
    // console.log(req.body)

    // creating a new User
    const user = new User(req.body)

    // saving this user to mongodb
    user.save().then((response) => {
        console.log(response)
        res.send(response)
    }).catch((err) => {
        console.log('Error saving user: ', err.message)
            // console.log(err)
    })
})

// Task Route
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then((response) => {
            console.log(response)
            res.send(response)
        })
        .catch((err) => {
            console.log('Error saving task: ', err.message)
        })
})


// Getting port number for server to run
const port = process.env.PORT || 3000

// Listeing to server
app.listen(port, () => {
    console.log('Server listening on port: ' + port)
})