const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET;
const User = require('../models/user');


exports.signup = async (req, res) => {
    User.findOne({ contact: req.body.contact })
        .exec(async (err, user) => {
            if (user) {
                return await res.status(400).json({
                    message: "user already exists"
                })
            }
            else {
                const { fullname, contact, password } = req.body
                let password_reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
                let contact_reg = /^\d{10}$/

                let result_password = password_reg.test(password);
                let result_contact = contact_reg.test(contact);

                if (result_password && result_contact) {

                    const hash_password = await bcrypt.hash(password, 10);

                    const _user = new User({
                        fullname: fullname,
                        contact: contact,
                        hash_password
                    })

                    _user.save(async (err, data) => {
                        if (err) {
                            return await res.status(400).json({
                                message: "Something Went wrong"
                            })
                        }
                        if (data) {
                            return await res.status(200).json({
                                message: "Registartion Completed Successfully",
                                data: data
                            })
                        }
                    })
                }
                else {
                    res.status(400).json({
                        message: "Please Enter Strong Password or Contact."
                    })
                }
            }
        })
}

exports.signin = async (req, res) => {
    User.findOne({ contact: req.body.contact })
        .exec(async (err, user) => {
            if (err) {
                return res.status(400).json({ error });
            }
            if (user) {
                const password = await user.authenticate(req.body.password);
                if (password && user) {
                    const accesstoken = jwt.sign({ _id: user._id, name: user.fullname, contact: user.contact }, process.env.JWT_SECRET, { expiresIn: "60m" })

                    const { _id, fullname, contact } = user;
                    res.status(200).json({
                        accesstoken,
                        user: {
                            _id, fullname, contact
                        }
                    })
                } else {
                    return res.status(400).json({
                        message: "Wrong Password"
                    })
                }
            } else {
                return res.status(200).json({
                    message: "Wrong Credentials!"
                })
            }
        })

}
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilionumber = process.env.TWILIO_PHONE_NUMBER;
console.log("Authtoken" + authToken);
console.log("AccountSid" + accountSid);
exports.otpsend = (req, res) => {

    const client = require('twilio')(accountSid, authToken);
    client.messages
      .create({
         body: "Hello Goti",
         from: twilionumber,
         to: "+917031111200"
       })
      .then(message => console.log(message.sid));

}
