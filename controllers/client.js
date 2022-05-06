const Client = require('../models/client');

exports.createClient = async (req,res)=>{

    const{client_name,client_contact,client_city,client_state,client_country,client_pincode,createdby} = req.body
    const _client = new Client({
        client_name,
        client_contact,
        client_city,
        client_state,
        client_country,
        client_pincode,
        createdby
    })

    _client.save(async (err,data)=>{
        if (err) {
            return await res.status(400).json({
                message:"Something Went Wrong!"
            })
        }
        if (data) {
            return await res.status(200).json({
                message:"Boom guys Client Added Sucessfully",
                data:data
            })
        }
    })
}
exports.getClient = async (req,res)=>{
    Client.find()
    .select('_id client_name')
    .exec( async (err,client)=>{
        if (err) {
            return res.status(400).json({error});
        }
        if (client) {
            return res.status(200).json({
             client
            })
        }
    })
}

exports.getClientById= async (req,res)=>{
    Client.findOne({_id:req.body.clientId})
    .exec( async (err,client)=>{
        if (err) {
            return res.status(400).json({error});
        }
        if (client) {
            return res.status(200).json({
             client
            })
        }
    })
}

exports.deleteClientById= async (req,res)=>{
    Client.deleteOne({_id:req.body.clientId})
    .exec( async (err,client)=>{
        if (err) {
            return res.status(400).json(err);
        }
        if (client) {
            return res.status(200).json({
             message:"Client Deleted Successfully"
            })
        }
    })
}

exports.updateClient= async (req,res)=>{
    const{client_name,client_contact,client_city,client_state,client_country,client_pincode} = req.body

    const update = {
        client_name,
        client_contact,
        client_city,
        client_state,
        client_country,
        client_pincode
    }
    Client.findOneAndUpdate({_id:req.body.clientId},update)
    .exec( async (err,client)=>{
        if (err) {
            return res.status(400).json(err);
        }
        if (client) {
            return res.status(200).json({
             message:"Client Updated Successfully",
             client
            })
        }
    })
}