const express=require("express");
const Category=require("../models/category");

exports.createCategory=(req,res)=>{
    Category.findOne({name:req.body.name})
    .exec(async(err,data)=>{
        if(err){
            return await res.status(400).json({
                message:"Something went wrong!"
            })
        }
        if(data){
            return await res.status(400).json({
                message:"Loda already pdi che item"
            })
        }else{
            const name=req.body.name;
            const _cat=new Category({
                name
            })
            _cat.save(async(err,data)=>{
                if(err){
                    return await res.status(400).json({
                        message:"Something went wrong!"
                    })
                }
                if(data){
                    return await res.status(200).json({
                        message:"Category added successfully"
                    })
                }
            })
        }
    })
}

exports.getCategory=(req,res)=>{
    Category.find()
    .select('name _id')
    .exec(async(err,data)=>{
        if(err){
            return await res.status(400).json({
                message:"Something went wrong!"
            })
        }
        if(data){
            return await res.status(200).json({
                message:"Category fetched!",
                data:data
            })
        }
    })
}

exports.updateCategory=(req,res)=>{
    const id=req.body.categoryId;
    Category.findOneAndUpdate({_id:id},{name:req.body.name})
    .exec(async(err,data)=>{
        if(err){
            return await res.status(400).json({
                message:"Something went wrong!"
            })
        }
        if(data){
            return await res.status(200).json({
                message:"Category updated!",
                data:data
            })
        }
    })
}

exports.deleteCategory=(req,res)=>{
    const id=req.body.categoryId;
    Category.deleteOne({_id:id})
    .exec(async(err,data)=>{
        if(err){
            return await res.status(400).json({
                message:"Something went wrong!"
            })
        }
        if(data){
            return await res.status(200).json({
                message:"Category deleted!",
                data:data
            })
        }
    })
}