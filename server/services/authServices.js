const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {SECRET} = require('../config/env')

exports.create = (userData) => User.create(userData)

exports.login = async (email, password) => {
    const user = await User.findOne ({email})

    if(!user) {
        throw{ message: 'Cannot find email or password'}
    }

    const isValid = bcrypt.compare(password, user.password)

    if(!isValid){
        throw{ message: 'Cannot find email or password'}

    }

    return user
}
exports.createToken = (user) => {
    const payload = { _id: user._id, firstName: user.firstName, secondName: user.secondName, email: user.email, tel: user.tel}
    const options = {expiresIn: '2d'}
    // console.log(payload)
   return new Promise((resolve, reject) =>{
        jwt.sign(payload, SECRET, options, (err, decodedToken) => {
            if(err) {
                console.log(err)
                return reject(err)
            }

            resolve(decodedToken)
        })

    })
}