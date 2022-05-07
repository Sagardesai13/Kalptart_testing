const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
 client_name:{
     type:String,
     required:true,
     min:3,
     max:30,
 },
 client_contact:{
     type:String,
     required:true,
 },
 client_email:{
     type:String,
     default:"None"
 },
 client_city:{
     type:String,
     required:true
 },
 client_state:{
     type:String,
     required:true
 },
 client_country:{
     type:String,
     required:true
 },
 client_pincode:{
     type:String,
     required:true
 },
 createdby:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'user',
     required:true
 }
},{timestamps:true})

clientSchema.path('client_contact').validate(function validatePhone() {
    return ( this.client_contact.length==10);
  });

clientSchema.path('client_pincode').validate(function validatePincode() {
    return ( this.client_pincode.length==6);
  });

  module.exports=mongoose.model('client',clientSchema);