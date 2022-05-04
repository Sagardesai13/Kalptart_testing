const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const JWT_SECRET = process.env.JWT_SECRET;
const User = require('../models/user');

exports.signup = async (req, res) => {

   

        User.findOne({ contact: req.body.mobileno })
            .exec(async (err, user) => {

                try {

                    if (user) return await res.status(400).json({
                        message: "User Already Registered!"
                    })
                    else {
                        const {
                            fullname,
                            password,
                            mobileno
                            
                        } = req.body;


                        
                        const hash_password = await bcrypt.hash(password, 10);

                        const _user = new User({
                            fullname,
                            hash_password,
                            contact: mobileno
                            
                        })

                        _user.save(async (err, data) => {
                            if (err) {
                                return await res.status(400).json({
                                    message: "Something Went Wrong"
                                })
                            }
                            if (data) {
                                return await res.status(200).json({
                                    message: "Registered Successfully!",
                                    data: data
                                })
                            }
                        })
                    }

                } catch (err) {

                    return res.status(500).json({ msg: err.message });
                }

            })

}

exports.signin = (req, res) => {
    User.findOne({ contact: req.body.mobileno })
        .exec(async (err, user) => {
            if (err) {
                return res.status(400).json({ error });
            }
            if (user) {
                const ispassword = await user.authenticate(req.body.password);
                if (ispassword && user) {
                    console.log(JWT_SECRET);
                    const token = jwt.sign({ _id: user._id, name: user.fullname, contact: user.contact }, process.env.JWT_SECRET, { expiresIn: '60s' });
                    const { _id, fullname, contact } = user;
                    res.status(200).json({
                        token,
                        user: {
                            _id, fullname, contact
                        }
                    })
                } else {
                    return res.status(400).json({
                        message: "Wrong Password!"
                    })
                }
            } else {
                return res.status(200).json({
                    message: "Wrong Credentials!"
                })
            }
        })
}