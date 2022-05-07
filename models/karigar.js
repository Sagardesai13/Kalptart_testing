const mongoose = require('mongoose');

const karigarSchema = new mongoose.Schema({
 karigar_name:{
     type:String,
     required:true,
     min:3,
     max:30,
 },
 karigar_contact:{
     type:String,
     required:true,
 },
 karigar_email:{
    type:String,
    default:"None"
},
 karigar_city:{
     type:String,
     required:true
 },
 karigar_state:{
     type:String,
     required:true
 },
 karigar_country:{
     type:String,
     required:true
 },
 karigar_pincode:{
     type:String,
     required:true
 },
 createdby:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'user',
     required:true
 }
},{timestamps:true})

karigarSchema.path('karigar_contact').validate(function validatePhone() {
    return ( this.karigar_contact.length==10);
  });

karigarSchema.path('karigar_pincode').validate(function validatePincode() {
    return ( this.karigar_pincode.length==6);
  });

  module.exports=mongoose.model('karigar',karigarSchema);