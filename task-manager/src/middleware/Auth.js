// Importing modules
const jwt = require('jsonwebtoken')
const User = require('../models/UserModel')

const auth = async(req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'Hello world!!!')
        const user = await User.findOne({ _id: decoded.id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.user = user
        req.token = token
        next()
    } catch (err) {
        res.send('Error: Please Authenticate.')
    }
}

module.exports = auth