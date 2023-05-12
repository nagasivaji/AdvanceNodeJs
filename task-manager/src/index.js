// Importing express module
const express = require('express')

// Importing Mongo DB 
require('./db/mongoose')
    /*
        ///////////////////////////////////// NOTES /////////////////////////////////////
        Here we are not assigning Mongoose to any variable
        The reason for this is to actually use mongoose models 1st we nned to connect to mongodb
        By importing Mongoose like this will go into that file/module and execute everything on that file
        So that we can able to connect to mongodb by running mongoose.js script
        Later we can import Mongoose module ans we can use those to interact with db

        Note: this importing mongodb module is must be at top of all. At least above to model's import
        so that it should be in a sequence.

        1: Need to connect to db
        2: Need to use models
    */



// Importing Mongoose models
const User = require('./models/User');

// creatiing express app
const app = express()

// Getting port number for server to run
const port = process.env.PORT || 3000

// This will convert request type to jsson format
app.use(express.json())


// User routes
app.post('/users', (req, res) => {
    // console.log(req.body)

    // creating a new User
    const user = new User(req.body)

    // saving this user to mongodb
    user.save().then((response) => {
        console.log(response)
    }).catch((err) => {
        console.log('Error saving user: ', err.message)
            // console.log(err)
    })

    res.send('Creating a new user')
})


// Listeing our application on required port number
app.listen(port, () => {
    console.log('Server listening on port: ' + port)
})