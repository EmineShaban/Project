const mongoose = require('mongoose')

const meetingSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    // certificate: {
    //     type: String,
    //     enum: ['Yes', 'No'],
    //     required: true,
    // },
    // author: {
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User',
    // },
    // usersShared: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'User',
    // }]

})


const Meeting = mongoose.model('Meeting', meetingSchema)

module.exports = Meeting
