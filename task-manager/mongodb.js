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

    // Create or Connect to existing database
    const db = client.db(databaseName)

    // Create collection (like a table)
    const collection = db.collection('users')

    // Insert a document
    collection.insertOne({
        name: 'Sivaji',
        age: 23
    }, (error, result) => { // Callback fucntion for Inset operation
        if (error) {
            return console.log('Error while inserting the document')
        }

        console.log('Document inserted successfully')
        console.log(result)
    })

    // Inserting multiple documents
    collection.insertMany([{
            name: 'S1',
            age: 30
        },
        {
            name: 'S2',
            age: 40
        },
        {
            name: 'S3',
            age: 50
        }
    ], (error, result) => {
        if (error) {
            return console.log('Error while inserting the document')
        }

        console.log('Document inserted successfully')
        console.log(result)
    })


    // Drop all documents i.e Dropping a collection
    collection.drop((error, result) => {
        if (error) {
            return console.log('Error while dropping the document')
        }

        console.log('Document dropped successfully')
        console.log(result)
    })

    client.close((error, result) => {
        if (err) {
            return console.log('Unable to close connection')
        }

        console.log('Connection closed')
        console.log(result)
    })
})