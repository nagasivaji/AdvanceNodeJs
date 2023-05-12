// Importing express module
const express = require('express')

// Loading mongoose to connect with DB
require('./db/mongoose')

// Importing user routes from routes folder
const userRoutes = require('./routers/User')

// Importing task routes from routes folder
const taskRoutes = require('./routers/Task')




// creatiing express app
const app = express()

// This will convert request type to jsson format
app.use(express.json())





// Diverting users apis getting from browser/postman to required routes file i.e 'routes/user.js'
app.use('/users', userRoutes)

// Diverting users apis getting from browser/postman to required routes file i.e 'routes/task.js'
app.use('/tasks', taskRoutes)





// Getting port number for server to run
const port = process.env.PORT || 3000

// Listeing to server
app.listen(port, () => {
    console.log('Server listening on port: ' + port)
})