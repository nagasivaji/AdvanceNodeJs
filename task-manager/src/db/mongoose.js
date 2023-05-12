// Importing Mongoose module
const mongoose = require('mongoose')


// Mongo Db Connection URL to Database
const connectionUrl = 'mongodb://127.0.0.1:27017/task-manager-api'

// Connecting to the database
mongoose.connect(connectionUrl)






// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false // Default value as a false
//     }
// })

// const task = new Task({
//     description: 'Learn Mongoose  library',
// })

// task.save()
//     .then(result => {
//         console.log(result)
//     })
//     .catch(err => {
//         console.log(err)
//     })