const express = require('express');

const Router = express.Router();
const userModel = require('../models/user')

const bcrypt = require('bcrypt');

//register
Router.post('/register',async(req,res)=>{
    try {
       // generate hashed password from password entered by user
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user

    const user = await userModel.create({
        username : req.body.username,
        email : req.body.email,
        password : hashedPassword
    })

    // save user and send response
       // const user = await newUser.save();
        console.log(user)
        res.json(user.username)

    } catch (error) {
        res.json(error)
    }
})
//login
Router.post('/login',async(req,res)=>{
    try {
    // find user
    const user = await userModel.findOne({username : req.body.username})
    !user && res.json('Wrong Username or Password')

    // validate password
    const validPass = await bcrypt.compare(req.body.password,user.password)
    !validPass && res.json('Wrong Username or Password')

    // send response
    res.json({username:user.username,_id : user._id})
    } catch (error) {
        res.json(error)
    }
})

module.exports = Router;