const Notes = require("../models/notesmodel");

const searchnotes=async(req,res)=>{
    try{
        const {datetime}=req.body;
        if(!datetime){
            res.status(403).json({
                message:"enter datetime format 2024-06-29T14:11:25.224Z"
            })
        }
        const data=await Notes.find({
            created:datetime
        });
        res.status(200).json({
            message:"success",
            data:data
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=searchnotes;