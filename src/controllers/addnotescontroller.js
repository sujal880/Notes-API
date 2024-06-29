const Notes = require("../models/notesmodel");

const addNote=async(req,res)=>{
    try{
        const {user,note,createdat}=req.body;
        if(!user || !note){
            res.status(403).json({
                message:"enter required field's user,note"
            })
        }
        const data=new Notes({
            user:user,
            note:note,
            createdat:createdat
        });
        const response=await data.save();
        res.status(200).json({
            message:"note created",
            data:response
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=addNote;