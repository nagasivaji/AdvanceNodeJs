// Importins
const express = require('express')

// USer Controllers
const {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser
} = require('./../controllers/UserController')


// Express router
const userRouter = express.Router()
userRouter.get('/', getAllUsers)
userRouter.get('/:userId', getUser)
userRouter.post('/', createUser)
userRouter.patch('/:userId', updateUser)
userRouter.delete('/:userId', deleteUser)

// Export
module.exports = userRouter