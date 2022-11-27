// const { request } = require("express");

const {register} = require('../services/userService')

const authController = require("express").Router()

authController.post('/register', async (req, res) => {
    try{
       const token = await register(req.body.email, req.body.password)
        res.json(token)
    }catch(error){
        res.status(403).json({
            message: 'Invalid email or password'
        })
    }
})



module.exports = authController