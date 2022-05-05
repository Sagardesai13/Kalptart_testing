const jwt = require('jsonwebtoken');

exports.requiresignin=(req,res,next)=>{
if (req.headers.authorization) {
    const accesstoken = req.headers.authorization.split(" ")[1];

    jwt.verify(accesstoken,process.env.JWT_SECRET,(err,user)=>{
        if(err){
            return res.status(400).json({
                message:"Token Expired",
                err:err
            })
        }
        if (user) {
            req.user=user;
            next();
        }
    })
}else{
    return res.status(400).json({
        message:"Authorization Required"
    })
}
}

