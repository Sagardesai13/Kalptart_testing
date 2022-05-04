const express = require('express');
const path = require('path');
const mongoose=require('mongoose');
const cors = require('cors');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
//Importing Routes
const userRoutes=require("./routes/user");


//Variables from env Files
const port=process.env.PORT || 5000;
const MONGO_DB_USER=process.env.MONGO_DB_USER;
const MONGO_DB_PASSWORD=process.env.MONGO_DB_PASSWORD
const MONGO_DB_DB=process.env.MONGO_DB_DB;

//configuration for json and cors
app.use(express.json());
app.use(cors());

//DB Connection

mongoose.connect(`mongodb+srv://${MONGO_DB_USER}:${MONGO_DB_PASSWORD}@cluster0.ylfqs.mongodb.net/${MONGO_DB_DB}?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log("Database Connection error");
    console.log(err);
});


//default route
app.get('/',(req,res)=>{
    res.send("Server is running cool");
})

//userDefine Routes
app.use('/api',userRoutes);

//server listening on port
app.listen(port,(req,res)=>{
    console.log("Server is running on : " + port);
});