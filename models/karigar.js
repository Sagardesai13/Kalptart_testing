const mongoose=require("mongoose");
const karigarSchema=new mongoose.Schema({
    karigarId:{
        type:String,
        required:true,
        min:3,
        max:30
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    contact:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
        default:'India'
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true,
    },
    pincode:{
        type:Number,
        min:6
    },
    createBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    }
},{timestamps:true});


module.exports=mongoose.model('karigar',karigarSchema);