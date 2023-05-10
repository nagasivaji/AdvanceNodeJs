// Importing Mongoose module
const mongoose = require('mongoose')

// Mongo Db Connection URL to Database
const connectionUrl = 'mongodb://127.0.0.1:27017/task-manager-api'

// Connecting to the database
mongoose.connect(connectionUrl)


// Creating Model (like creating Table with requires constraints in SQL)
// User Collection (Asume Collection as a Class in JavaScript)
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true // Throws error is we do not specify name
    },
    age: {
        type: Number
    }
})


// Creating a new Document 
// User Document (Asume Document as an object in JavaScript)
// const me = new User({
//     name: 'NagaSivaji',
//     age: 23
// })

// // Saving the Document
// me.save()
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     })


const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false // Default value as a false
    }
})

const task = new Task({
    description: 'Learn Mongoose  library',
})

task.save()
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })