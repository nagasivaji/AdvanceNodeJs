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
    // collection.insertOne({
    //     name: 'Sivaji',
    //     age: 23
    // }, (error, result) => { // Callback fucntion for Inset operation
    //     if (error) {
    //         return console.log('Error while inserting the document')
    //     }

    //     console.log('Document inserted successfully')
    //     console.log(result)
    // })

    // Inserting multiple documents
    // collection.insertMany([{
    //         name: 'S',
    //         age: 30
    //     },
    //     {
    //         name: 'S',
    //         age: 40
    //     },
    //     {
    //         name: 'S',
    //         age: 50
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Error while inserting the document')
    //     }

    //     console.log('Document inserted successfully')
    //     console.log(result)
    // })

    // Find all documents
    // collection.find({}).toArray((error, result) => {
    //     if (error) {
    //         return console.log('Error while finding the document')
    //     }

    //     console.log('Documents found successfully')
    //     console.log(result)
    // })

    // // Find a single document
    // collection.findOne({ _id: mongodb.ObjectId("645b6efbe388d4ce7ac1a83e") }, (error, result) => {
    //     if (error) {
    //         return console.log('Error while finding the document')
    //     }

    //     console.log('Document found successfully')
    //     console.log(result)
    // })


    //updating a single document
    collection.updateOne({ _id: mongodb.ObjectId("645b6efbe388d4ce7ac1a83f") }, { $set: { name: 'Sivaji1' } }, (error, result) => {
        if (error) {
            return console.log('Error while updating the document')
        }

        console.log('Document updated successfully')
        console.log(result)
    })

    // updating multiple documents
    collection.updateMany({ name: 'S' }, { $set: { name: 'Sivaji' } }, (error, result) => {
        if (error) {
            return console.log('Error while updating  documents')
        }

        console.log('Documnets updated successfully')
        console.log(result)
    })


    // Drop all documents i.e Dropping a collection
    // collection.drop((error, result) => {
    //     if (error) {
    //         return console.log('Error while dropping the document')
    //     }

    //     console.log('Document dropped successfully')
    //     console.log(result)
    // })

    // Close the collection
    // client.close((error, result) => {
    //     if (err) {
    //         return console.log('Unable to close connection')
    //     }

    //     console.log('Connection closed')
    //     console.log(result)
    // })
})