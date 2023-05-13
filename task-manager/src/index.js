// Imports
const express = require('express')

// connecting to db
require('./db/mongoose')


// Routes
const userRoutes = require('./routers/UserRoutes')
const taskRoutes = require('./routers/TaskRoutes')


// Express app
const app = express()
app.use(express.json())


// Diverting routes
app.use('/users', userRoutes)
app.use('/tasks', taskRoutes)


// Listeing to server
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('Server listening on port: ' + port)
})


const jwt = require('jsonwebtoken')


const myFun = async() => {
    const tocken = jwt.sign({ id: 123 }, 'Hello user This is a sentance user for tocken generetion', { expiresIn: '1 day' })
    console.log(tocken)

    console.log(jwt.verify(tocken, 'Hello user This is a sentance user for tocken generetion'))
}

myFun()