const jwt=require("jsonwebtoken")

exports.requiresignin=(req,res,next)=>{
    if(req.headers.authorization){
    const token=req.headers.authorization.split(" ")[1]; //javascript function split with array[1] like bearer <token>
    jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return res.status(400).json({
                message:"token expired",
                err:err
            })
        }
        if(user){
            req.user=user;
            next();
        }
        
    })
    }else{
    return res.status(400).json({message : "Authorization Required"})
    }
}