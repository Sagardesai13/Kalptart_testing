const mongoose=require("mongoose");
const bcrypt=require("bcrypt");

const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        min:3,
        max:30
    },
    hash_password:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    }

},{timestamps:true});


userSchema.methods={
    authenticate:async function(password){
        return await bcrypt.compare(password,this.hash_password);
    }
}

module.exports=mongoose.model('user',userSchema);