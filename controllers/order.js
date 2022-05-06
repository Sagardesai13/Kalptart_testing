const Order = require('../models/order');
const fs = require('fs');

exports.newOrders = async (req, res) => {

    try {
        const { clientId, karigarId, orderCategory, refNo, quantity, weightFrom, weightTo, deliveryDate, melting, priority, HUID, orderType, orderStatus, orderImg } = req.body;

        const files = req.files;

        if(!files){

            return res.status(400).json(err);
        }

        

        // var encode_image = img1.toString('base64');

        // var finalImage = {
        //     img:new Buffer(encode_image, 'base64')
            
        // }


        const _order = new Order({
            clientId, karigarId, orderCategory, refNo, quantity, weightFrom, weightTo, deliveryDate, melting, priority, HUID, orderType, orderStatus, orderImg
        })

        _order.save(async (err, data) => {
            if (err) {
                return await res.status(400).json({
                    message: "Something Went Wrong",
                    err: err
                })
            }

            if (data) {
                return await res.status(200).json({
                    message: "Registered Successfully!",
                    data: data
                })
            }
        })

        console.log(files);

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

exports.getOrders = async (req, res) => {

    try {

        const orders = await Order.find();

        res.json({
            status: 'success',
            result: orders.length,
            orders: orders
        })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }

}

exports.getOrderById = async (req, res) => {

    try {

        const orders = await Order.find({ _id: req.params.id });
        res.json(orders);

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }

}

exports.deleteOrder = async (req, res) => {

    try {

        await Order.findByIdAndDelete(req.params.id);
        res.json({ msg: "Deleted a Order" });

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


exports.editOrders = async (req, res) => {

    try {

        const { clientId, karigarId, orderCategory, refNo, quantity, weightFrom, weightTo, deliveryDate, melting, priority, HUID, orderType } = req.body;


        await Order.findOneAndUpdate({ _id: req.params.id }, {
            clientId, karigarId, orderCategory, refNo, quantity, weightFrom, weightTo, deliveryDate, melting, priority, HUID, orderType
        })

        const orders = await Order.find({ _id: req.params.id });
        res.json(orders);

        //res.json({ msg: "Updated a Product" })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }

}