const Client = require('../models/client');

exports.createClient = async (req, res) => {

    const { client_name, client_contact, client_city, client_state, client_country, client_pincode, createdby, client_email } = req.body

    let email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let contact_reg = /^\d{10}$/
    let pincode_reg = /^\d{6}$/

    let result_email = email_reg.test(client_email);
    let result_contact = contact_reg.test(client_contact);
    let result_pincode = pincode_reg.test(client_pincode);

    if (result_email && result_contact && result_pincode) {
        const _client = new Client({
            client_name,
            client_contact,
            client_email,
            client_city,
            client_state,
            client_country,
            client_pincode,
            createdby
        })

        _client.save(async (err, data) => {
            if (err) {
                return await res.status(400).json({
                    message: "Something Went Wrong!"
                })
            }
            if (data) {
                return await res.status(200).json({
                    message: "Boom guys Client Added Sucessfully",
                    data: data
                })
            }
        })
    }
    else {
        res.status(400).json({
            message: "Please Enter Valid Information."
        })
    }


}

exports.getClient = async (req, res) => {
    Client.find()
        .select('_id client_name')
        .exec(async (err, client) => {
            if (err) {
                return res.status(400).json({ error });
            }
            if (client) {
                return res.status(200).json({
                    client
                })
            }
        })
}

exports.getClientById = async (req, res) => {
    Client.findOne({ _id: req.body.clientId })
        .exec(async (err, client) => {
            if (err) {
                return res.status(400).json({ error });
            }
            if (client) {
                return res.status(200).json({
                    client
                })
            }
        })
}

exports.deleteClientById = async (req, res) => {
    Client.deleteOne({ _id: req.body.clientId })
        .exec(async (err, client) => {
            if (err) {
                return res.status(400).json(err);
            }
            if (client) {
                return res.status(200).json({
                    message: "Client Deleted Successfully"
                })
            }
        })
}

exports.updateClient = async (req, res) => {
    const { client_name, client_contact, client_city, client_state, client_country, client_pincode, client_email } = req.body

    let email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let contact_reg = /^\d{10}$/
    let pincode_reg = /^\d{6}$/

    let result_email = email_reg.test(client_email);
    let result_contact = contact_reg.test(client_contact);
    let result_pincode = pincode_reg.test(client_pincode);

    if (result_email && result_contact && result_pincode) {
        const update = {
            client_name,
            client_contact,
            client_email,
            client_city,
            client_state,
            client_country,
            client_pincode
        }
        Client.findOneAndUpdate({ _id: req.body.clientId }, update)
            .exec(async (err, client) => {
                if (err) {
                    return res.status(400).json(err);
                }
                if (client) {
                    return res.status(200).json({
                        message: "Client Updated Successfully",
                        client
                    })
                }
            })

    }
    else {
        res.status(400).json({
            message: "Please Enter Valid Information."
        })

    }


}