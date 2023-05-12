// Importing express
const express = require('express')

// Importing user Controllers
const {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
} = require('./../controllers/User')


// Creating express router
const userRouter = express.Router()

// User Routes
// creating a new user
userRouter.post('/', createUser)

// Getting all the users 
userRouter.get('/', getAllUsers)

// Getting a single users
userRouter.get('/:userId', getUser)

// updating users
userRouter.patch('/:userId', updateUser)

// Delete a user 
userRouter.delete('/:userId', deleteUser)


module.exports = userRouter