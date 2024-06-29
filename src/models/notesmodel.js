const mongoose=require('mongoose');
const notesSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    created:{
        type:Date,
        default:Date.now,
        required:true
    },
    note:{
        type:String,
        required:true
    }
});

const Notes=mongoose.model('notes',notesSchema);
module.exports=Notes;