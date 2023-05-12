// Importing Mongoose module
const mongoose = require('mongoose')

// Importing validator module
const validator = require('validator')


// Creating Model (like creating Table with requires constraints in SQL)
// User Collection (Asume Collection as a Class in JavaScript)
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true, // Throws error is we do not specify name
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

// Exportgin User Model
module.exports = User