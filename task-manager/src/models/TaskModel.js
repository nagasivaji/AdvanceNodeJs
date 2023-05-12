// Importing Mongoose module
const mongoose = require('mongoose')

// Importing validator module
const validator = require('validator')

// Creting Task Model
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false // Default value as a false
    }
})

// exporting module
module.exports = Task