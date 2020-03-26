const { Schema, model, ObjectId } = require('mongoose')

const route = new Schema({
    name: {
        type: String,
        required: true,
    },
    method: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    response: {
        type: JSON,
        required: true,
    },
    user_id: { type: ObjectId, ref: 'users' }
}, {
    timestamps: true
})

module.exports = model('routes', route)