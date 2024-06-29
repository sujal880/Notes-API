const User = require("../models/usermodel");
const bcrypt=require('bcrypt');
const signUp=async(req,res)=>{
    try{
        const {email,password,username,phonenumber}=req.body;
        if(!email || !password || !username || !phonenumber){
            res.status(403).json({
                message:"enter required field's email,password,username,phonenumber"
            })
        }
        const existinguser=await User.findOne({email});
        if(existinguser){
            res.status(400).json({
                message:"user already created"
            })
        }
        const hashedpassword=await bcrypt.hash(password,10);
        const data=new User({
            email:email,
            password:hashedpassword,
            username:username,
            phonenumber:phonenumber
        });
        const response=await data.save();
        res.status(200).json({
            message:"user created",
            data:response
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=signUp;