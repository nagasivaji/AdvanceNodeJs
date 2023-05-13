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


const bcrypt = require('bcryptjs')



const myFun = async() => {
    const password = 'abc1234'
    const hashedPassword = await bcrypt.hash(password, 8)
    console.log('Password: ', password)
    console.log('Hashed Password: ', hashedPassword)
}

myFun()