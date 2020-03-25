const { Schema, model } = require('mongoose')

const schema = new Schema({
    username: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        safe: true
    },
}, {
    timestamps: true
})

module.exports = model('users', schema)