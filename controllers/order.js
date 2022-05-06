const Order = require('../models/order');
const multer = require('multer');
const upload = multer({dest:'/uploads/'});

exports.newOrders = async (req, res) => {

    try {
        const { clientId, karigarId, orderCategory, refNo, quantity, weightFrom, weightTo, deliveryDate, melting, priority, HUID, orderType, orderStatus } = req.body;

        const _order = new Order({
            clientId, karigarId, orderCategory, refNo, quantity, weightFrom, weightTo, deliveryDate, melting, priority, HUID, orderType, orderStatus
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

// exports.getImages = async (req, res) => {

    
// }
