const User = require("../models/usermodel");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const secretkey="hikawhhhveshgeuhyfiegfvkbhvkhnvkhvfkih";
const signIn=async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            res.status(403).json({
                message:"enter required field's email,password"
            })
        }
        const existinguser=await User.findOne({email});
        if(!existinguser){
            res.status(400).json({
                message:"invalid email or password"
            })
        }
        const isMatch=await bcrypt.compare(password,existinguser.password);
        if(!isMatch){
            res.status(400).json({
                message:"password doesn't Match"
            })
        }
        const token=jwt.sign({
            userId:existinguser._id
        },secretkey,{expiresIn:'48h'});
        res.status(200).json({
            message:"signin success",
            data:existinguser,
            token:token
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}
module.exports=signIn;