// Importins
const express = require('express')
    // Importing middle ware
const auth = require('../middleware/Auth')

// USer Controllers
const {
    createUser,
    getUser,
    getAllUsers,
    updateUser,
    deleteUser,
    loginUser
} = require('./../controllers/UserController')


// Express router
const userRouter = express.Router()
userRouter.get('/me', auth, getAllUsers) // Adding middle ware to required routes
userRouter.get('/:userId', getUser)
userRouter.post('/', createUser)
userRouter.patch('/:userId', updateUser)
userRouter.delete('/:userId', deleteUser)
userRouter.post('/login', loginUser)

// Export
module.exports = userRouter