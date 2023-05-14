// Imports
const User = require('../models/UserModel');


// Controllers
const createUser = async(req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateToken()
        res.send({ user, token })
    } catch (err) {
        res.status(500).send(('Error saving user', err.message).toString())
    }
}

const loginUser = async(req, res) => {
    const email = req.body.email
    const password = req.body.password
        // isValidUser is a custome mongoose model method
    try {
        const user = await User.isValidUser(email, password)
        if (!user) {
            res.status(404).send('Is not a valid user')
        }
        const token = await user.generateToken()
        res.send({ user, token })
    } catch (err) {
        res.status(500).send(('Error while checking', err.message).toString())
    }
}


// const getAllUsers = async(req, res) => {
//     await User.find({}, { name: 1, age: 1, email: 1 })
//         .then((users) => {
//             res.send(users)
//         }).catch((err) => {
//             res.status(500).send('Error getting users', err.message)
//         })
// }


const getAllUsers = async(req, res) => {
    // console.log(req.user)
    res.send(req.user)
}


const getUser = async(req, res) => {
    const userId = req.params.userId

    await User.findById(userId, { name: 1, age: 1, email: 1 })
        .then((user) => {
            if (!user) {
                res.status(404).send('No user found')
            }
            res.send(user)
        }).catch((err) => {
            res.status(500).send('Error getting users', err.message)
        })
}


const updateUser = async(req, res) => {
    const userId = req.params.userId
    const user = req.body

    await User.findByIdAndUpdate(userId, user, { new: true, runValidators: true })
        .then((user) => {
            if (!user) {
                res.status(404).send('No user found')
            }
            res.send(user)
        })
        .catch((err) => {
            res.status(500).send('Error updating users', err.message)
        })
}


const deleteUser = async(req, res) => {
    const userId = req.params.userId

    await User.findByIdAndDelete(userId)
        .then((user) => {
            if (!user) {
                res.status(404).send('No user found')
            }
            res.send(user)
        })
        .catch((err) => {
            res.status(500).send('Error deleting user', err.message)
        })
}

// Exports
module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    loginUser
}