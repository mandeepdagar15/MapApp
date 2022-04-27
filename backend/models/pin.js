const mongoose = require('mongoose');

const pinSchema = mongoose.Schema({
    username : {
        type : String,
        require : true,
        
    },
     title: {
        type : String,
        require : true,
        
    },
    desc : {
        type : String,
        require : true
     
    },
    rating : {
        type : Number,
        require : true,
        min : 0,
        max : 5
    },
    lat : {
    type : Number,
    require : true 
    },
    long : {
        type : Number,
        require : true 
        }

},{timestamps : true})


const pinModel = mongoose.model('pinModel',pinSchema);

module.exports = pinModel