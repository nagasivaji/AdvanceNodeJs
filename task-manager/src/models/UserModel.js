// Importing Mongoose module
const mongoose = require('mongoose')

// Importing validator module
const validator = require('validator')

// Importing bcrypt module
const bcrypt = require('bcryptjs')

// Creating mongoose schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age cannot be negative')
            }
        }
    }
})


// Middleware configuration
userSchema.pre('save', async function(next) {
    // console.log(this)
    this.password = await bcrypt.hash(this.password, 8)
    next()
})

userSchema.pre('findOneAndUpdate', async function(next) {
    // console.log(this._update)
    this._update.password = await bcrypt.hash(this._update.password, 8)
    next()
})

// Creating User Model 
const User = mongoose.model('User', userSchema)

// Exportgin User Model
module.exports = User