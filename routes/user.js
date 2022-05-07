const exprees = require('express');
const { signup, signin, otpsend } = require('../controllers/user');
const { requiresignin } = require('../middleware/authcheck');

const router=exprees.Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/otpsend',otpsend);


module.exports= router;