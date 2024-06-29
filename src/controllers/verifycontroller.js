const jwt=require('jsonwebtoken');
const secretkey="ishfcikhihfikwshfishfikwsh";
const verifycontroller=async(req,res,next)=>{
    try{
        const token=req.headers['authorization'];
        if(!token){
            res.status(403).json({
                message:"No Token Provided"
            })
        }
        jwt.verify(token,secretkey,(err,decoded)=>{
            if(err){
                res.status(400).json({
                    message:'failed to authenticate user'
                })
            }
            req.user=decoded;
            next();
        })
    }
    catch(ex){
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=verifycontroller;