const express = require('express');

const Router = express.Router();
const pinModel = require('../models/pin')


//create a pin
Router.post('/',async(req,res)=>{
    const newPinModel = new pinModel(req.body)
    try {
       const savedPin = await newPinModel.save()
       res.json(savedPin) 
    } catch (error) {
        res.json(error)
    }
})

// get all pins
Router.get('/',async(req,res)=>{
    
    try {
       const pins = await pinModel.find()
       res.json(pins) 
    } catch (error) {
        res.json(error)
    }
})

module.exports = Router;