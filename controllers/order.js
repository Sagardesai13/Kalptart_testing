const Order = require('../models/order');
const fs = require('fs');

exports.newOrders = async (req, res) => {

    try {
        const { clientId, karigarId, orderCategory, refNo, quantity, weightFrom, weightTo, deliveryDate, melting, priority, HUID, orderType, orderStatus } = req.body;

        const files = req.files;

        let imageArray = [];

        if (!files) {

            return res.status(400).json({ msg: "No image upload" });
        }

        // files.forEach(file => {
        //     const name = file.filename;
        //     console.log(name);

        //     imageArray.push(name);
        // });

        imageArray = req.files.map(file => {
            return { img: file.filename }
        })



        const _order = new Order({
            clientId, karigarId, orderCategory, refNo, quantity, weightFrom, weightTo, deliveryDate, melting, priority, HUID, orderType, orderStatus, orderImg: imageArray
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

        //console.log(files);

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
        const orders = await Order.find({ _id: req.params.id });

        //let imageArray = [];

        if (orders[0].orderImg.length > 0) {
            orders[0].orderImg.forEach(file => {
                const name = file.img;

                fs.unlink('./uploads/orders/' + name, function (err) {
                    if (err) {
                        return res.status(400).json({
                            message: "Something Went Wrong",
                            err: err
                        })
                    }


                })

                //imageArray.push(name);
            });
        }

        await Order.findByIdAndDelete(req.params.id);

        res.json({ msg: "Deleted a Order" });

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}


exports.editOrders = async (req, res) => {

    try {

        const orders = await Order.find({ _id: req.params.id });

        //let imageArray = [];

        if (orders[0].orderImg.length > 0) {
            orders[0].orderImg.forEach(file => {
                const name = file.img;

                fs.unlink('./uploads/orders/' + name, function (err) {
                    if (err) {
                        return res.status(400).json({
                            message: "Something Went Wrong",
                            err: err
                        })
                    }


                })

                //imageArray.push(name);
            });
        }

        const { clientId, karigarId, orderCategory, refNo, quantity, weightFrom, weightTo, deliveryDate, melting, priority, HUID, orderType, orderStatus } = req.body;

        const files = req.files;

        if (!files) {

            return res.status(400).json({ msg: "No image upload" });
        }

        let imageArray = [];
        imageArray = req.files.map(file => {
            return { img: file.filename }
        })



        await Order.findOneAndUpdate({ _id: req.params.id }, {
            clientId, karigarId, orderCategory, refNo, quantity, weightFrom, weightTo, deliveryDate, melting, priority, HUID, orderType, orderStatus, orderImg: imageArray
        })

        //res.json({ msg: "Updated a Product" });

        const order = await Order.find({ _id: req.params.id });
        res.json(order);

        

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }

}