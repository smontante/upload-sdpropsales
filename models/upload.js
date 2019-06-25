const mongoose = require('mongoose')

const Upload = mongoose.model('upload', {
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    city: {
        type: String,
    },
    state: {
        type: String,
    },
    zip: {
        type: Number,
    },
    company: {
        type: String,
    }
})

module.exports = Upload