// Importing Mongoose module
const mongoose = require('mongoose')

// Mongo Db Connection URL to Database
const connectionUrl = 'mongodb://127.0.0.1:27017/task-manager-api'

// Connecting to the database
mongoose.connect(connectionUrl)