const express=require('express');
const allroutes = require('./app');
require('./config/db');
require('dotenv').config();
const PORT=process.config.SERVER | 4000;
const app=express();
app.use(express.json());
app.use(allroutes);

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"Server is Running Properly"
    })
})
app.listen(PORT,(req,res)=>{
    console.log("Server is Running on PORT "+PORT);
})