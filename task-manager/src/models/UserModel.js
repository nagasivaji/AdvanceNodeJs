// Importing Mongoose module
const mongoose = require('mongoose')

// Importing validator module
const validator = require('validator')

// Importing bcrypt module
const bcrypt = require('bcryptjs')

// Importing token generator module
const jwt = require('jsonwebtoken')

// Creating mongoose schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
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
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
})

// Custom Mongoose model methods
// Its like a static method in Java which can be accessable to all instances with class Name.
// We are creating a new method on Model or Table or Collection.
userSchema.statics.isValidUser = async(email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to find user')
    }

    const isPasswordMatching = await bcrypt.compare(password, user.password)

    if (!isPasswordMatching) {
        throw new Error('Password mismatch')
    }

    return user
}

// Auth Token generator function
// It is like a instance method in Java. However instance methods are not accessible with class name.
// They are only accessible with the instance name.

userSchema.methods.generateToken = async function() {
    const token = jwt.sign({ id: this._id.toString() }, 'Hello world!!!', { expiresIn: '1 day' })
    this.tokens = this.tokens.concat({ token })
    await this.save()
    return token
}



// Middleware configuration
userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 8)
    next()
})

userSchema.pre('findOneAndUpdate', async function(next) {
    this._update.password = await bcrypt.hash(this._update.password, 8)
    next()
})



// Creating User Model 
const User = mongoose.model('User', userSchema)

// Exportgin User Model
module.exports = User