const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');

const pinRoutes = require('./routes/pinRoutes')
const userRoutes = require('./routes/userRoutes')
const app = express();


dotenv.config();


app.use(morgan());
app.use(cors());
app.use(helmet());

app.use(express.json());

// app.get('/',(req,res)=>{
//     console.log('got it')
//     res.json({
//         message : 'got it'
//     })
// })

//const link = 'mongodb+srv://dagar:dagar@cluster0.izvqf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(process.env.Mongo_link,{useNewUrlParser:true})
.then(()=>{
    console.log('Mongo db connected')
})
.catch((err)=>{
 console.log(err)
})

app.use('/api/pins',pinRoutes)
app.use('/api/users',userRoutes)

const port = process.env.PORT || 6000 ;

app.listen(port,()=>{
    console.log('backend server is running')
    
})