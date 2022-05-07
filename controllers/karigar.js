const Karigar = require('../models/karigar');

exports.createKarigar = (req, res) => {

    const { karigar_name, karigar_contact, karigar_city, karigar_state, karigar_country, karigar_pincode, createdby, karigar_email } = req.body

    let email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let contact_reg = /^\d{10}$/
    let pincode_reg = /^\d{6}$/

    let result_email = email_reg.test(karigar_email);
    let result_contact = contact_reg.test(karigar_contact);
    let result_pincode = pincode_reg.test(karigar_pincode);

    if (result_email && result_contact && result_pincode) {

        const _karigar = new Karigar({
            karigar_name,
            karigar_contact,
            karigar_email,
            karigar_city,
            karigar_state,
            karigar_country,
            karigar_pincode,
            createdby
        })

        _karigar.save(async (err, data) => {
            if (err) {
                return await res.status(400).json({
                    message: "Something Went Wrong!"
                })
            }
            if (data) {
                return await res.status(200).json({
                    message: "Boom guys Karigar Added Sucessfully",
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

exports.getKarigar = (req, res) => {
    Karigar.find()
        .select('_id karigar_name')
        .exec(async (err, karigar) => {
            if (err) {
                return await res.status(400).json({ error });
            }
            if (karigar) {
                return await res.status(200).json({
                    karigar
                })
            }
        })
}

exports.getKarigarById = (req, res) => {
    Karigar.findOne({ _id: req.body.karigarId })
        .exec(async (err, karigar) => {
            if (err) {
                return await res.status(400).json({ error });
            }
            if (karigar) {
                return await res.status(200).json({
                    karigar
                })
            }
        })
}

exports.deleteKarigarById = async (req, res) => {
    Karigar.deleteOne({ _id: req.body.KarigarId })
        .exec(async (err, Karigar) => {
            if (err) {
                return res.status(400).json({
                    message: "Something went Wrong!"
                });
            }
            if (Karigar) {
                return res.status(200).json({
                    message: "Karigar Deleted Successfully"
                })
            }
        })
}

exports.updateKarigar = (req, res) => {
    const { karigar_name, karigar_contact, karigar_city, karigar_state, karigar_country, karigar_pincode, karigar_email } = req.body

    let email_reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let contact_reg = /^\d{10}$/
    let pincode_reg = /^\d{6}$/

    let result_email = email_reg.test(karigar_email);
    let result_contact = contact_reg.test(karigar_contact);
    let result_pincode = pincode_reg.test(karigar_pincode);

    if (result_email && result_contact && result_pincode) {

        const update = {
            karigar_name,
            karigar_contact,
            karigar_email,
            karigar_city,
            karigar_state,
            karigar_country,
            karigar_pincode,
        }
        Karigar.findOneAndUpdate({ _id: req.body.karigarId }, update)
            .exec(async (err, karigar) => {
                if (err) {
                    return await res.status(400).json(err);
                }
                if (karigar) {
                    return await res.status(200).json({
                        message: "karigar Updated Successfully",
                        karigar
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