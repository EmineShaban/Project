const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const {SALT_ROUNDS} = require('../config/env')
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Username is required']
    },
    secondName: {
        type: String,
        required: [true, 'Username is required']
    },
    email: {
        type: String,
        required: true,
    },
    tel: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

userSchema.pre('save', function(next){
    bcrypt.hash(this.password, SALT_ROUNDS)
    .then(hashedPassword => {
        
        this.password = hashedPassword
        next()
    })
})

const User = mongoose.model('User', userSchema)

module.exports = User
