const mongoose=require("mongoose");

const cateegorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
},{timestamps:true});


module.exports=mongoose.model('category',cateegorySchema);