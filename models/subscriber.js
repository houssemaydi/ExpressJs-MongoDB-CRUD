const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscriberChannel: {
        type: String,
        require: true

    },
    subscribtionDate: {
        type: Date,
        require: true,
        default: Date.now()

    }



})

module.exports = mongoose.model('Subscriber', subscriberSchema)