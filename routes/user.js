const exprees = require('express');
const { signup, signin } = require('../controllers/user');
const { requiresignin } = require('../middleware/authchech');

const router=exprees.Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/checksignin',requiresignin,(req,res)=>{
    res.status(200).json({
        user:req.user
    })
    console.log(req.user);
})


module.exports= router;