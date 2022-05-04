const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'client',
        required:true
    },
    karigarId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'karigar',
        required:true
    },
    orderCategory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true,
    },
    refNo:{
        type:Number,
        unique:true,
    },
    quantity:{
        type:Number,
        default:1,
        required:true,
    },
    weightFrom:{
        type:Number,
        required:true,
    },
    weightTo:{
        type:Number,
        required:true,
    },
    deliveryDate:{
        type:Date,
        required:true
    },
    melting:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        enum:['Normal','Fast','Urgent'],
        default:'Normal',
        required:true
    },
    orderImg:[
        {
            img:
            {
                type:String
            }
        }
    ],
    HUID:{
        type:String,
        enum:['Yes','No'],
        required:true,
    },
    orderType:{
        type:String,
        enum:['Custom','Stock'],
        required:true,
        default:'Custom'
    },
    orderStatus:{
        type:String,
        enum:['New Order','in Process','Karigar Completed','Order Ready','Pending','Delivered'],
        default:'New Order',
        required:true
    }
},{timestamps:true});


orderSchema.path('orderImg').validate(function (value) {
    console.log("img length"+value.length);
    if (value.length >= 5) {
      throw new Error("Images more than 5 not allowed!");
    }
  });

module.exports=mongoose.model('order',orderSchema);