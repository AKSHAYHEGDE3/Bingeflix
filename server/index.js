const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config()

const app = express();

const mongodb = process.env.MONGO_URL

mongoose.connect(mongodb,{useNewUrlParser: true,  useUnifiedTopology: true  }).
then(()=>{console.log("connected to DB")}).
catch(err=>console.log(err))

app.use(express.json())

app.listen(5000,()=>{
    console.log("server is running")
})


//ROUTES

const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/users')


app.use(authRoutes)
app.use(userRoutes)
