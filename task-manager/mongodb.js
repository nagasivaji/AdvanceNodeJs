// Crud Operations
// importing Mongodb
const mongodb = require('mongodb')

// Creating mongodb client
const MongoClient = mongodb.MongoClient

// Mongo Db Connection URL
const connectionUrl = 'mongodb://127.0.0.1:27017'

// Database Name
const databaseName = 'task-manager'

// Creating connection to MongoDB
MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (err, client) => {

    if (err) {
        return console.log('Unable to connect to MongoDB')
    }

    console.log('Connected to MongoDB')

})