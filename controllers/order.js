const Order = require('../models/order');

exports.newOrders = async (req, res) => {

    try {
        const { clientId, karigarId, orderCategory, refNo, quantity, weightFrom, weightTo, deliveryDate, melting, priority, HUID, orderType, orderStatus } = req.body;

        const _order = new Order({
            clientId, karigarId, orderCategory, refNo, quantity, weightFrom, weightTo, deliveryDate, melting, priority, HUID, orderType, orderStatus
        })

        _order.save(async (err,data)=>{
            if(err){
                return await res.status(400).json({
                    message:"Something Went Wrong",
                    err:err
                })
            }

            if(data){
                return await res.status(200).json({
                    message:"Registered Successfully!",
                    data:data
                })
            }
        })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

exports.getOrders = async (req,res)=>{
    
}