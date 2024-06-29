const Notes = require("../models/notesmodel");

const getNotes=async(req,res)=>{
    try{
        const {user}=req.body;
        if(!user){
            res.status(403).json({
                message:"enter user id"
            })
        }
        const data=await Notes.find({user});
        console.log(data);
        res.status(200).json({
            message:"success",
            data:data
        })
    }
    catch(ex){
        console.log(ex);
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=getNotes;