const mongoose = require('mongoose')

const AdminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    timedate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('admins', AdminSchema);