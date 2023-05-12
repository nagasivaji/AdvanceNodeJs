// Importing User model
const User = require('../models/User');


// creating a new user
const createUser = async(req, res) => {
    // console.log(req.body)

    // creating a new User
    const user = new User(req.body)

    // saving this user to mongodb
    await user.save().then((user) => {
        console.log(user)
        res.send(user)
    }).catch((err) => {
        console.log('Error saving user: ', err.message)
            // console.log(err)
        res.status(500).send('Error saving user')
    })
}



// Getting all the users 
const getAllUsers = async(req, res) => {
    console.log('getting all users')
    await User.find().then((users) => {
        console.log(users)
        res.send(users)
    }).catch((err) => {
        console.log('Error getting users: ', err.message)
        res.status(500).send('Error getting users')
    })
}


// Getting a single users
const getUser = async(req, res) => {
    const userId = req.params.userId
    console.log(userId)
    await User.findById(userId).then((user) => {
        console.log(user)
        if (!user) {
            res.status(404).send('No user found')
        }
        res.send(user)
    }).catch((err) => {
        console.log('Error getting users: ', err.message)
        res.status(500).send('Error getting users')
    })
}

// updating users
const updateUser = async(req, res) => {
    const userId = req.params.userId
    const userName = req.body.name
    console.log(userName)

    await User.findByIdAndUpdate(userId, { name: userName }, { new: true, runValidators: true }).then((user) => {
            console.log('User updated')
            if (!user) {
                res.status(404).send('No user found')
            }
            res.send(user)
        })
        .catch((err) => {
            console.log('Error updating users: ', err.message)
            res.status(500).send('Error updating users')
        })
}


// Delete a user 
const deleteUser = async(req, res) => {
    const userId = req.params.userId

    await User.findByIdAndDelete(userId).then((user) => {
            console.log(user)

            if (!user) {
                res.status(404).send('No user found')
            }
            res.send(user)
        })
        .catch((err) => {
            console.log('Error deleting user: ', err.message)
            res.status(500).send('Error deleting user')
        })
}

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}