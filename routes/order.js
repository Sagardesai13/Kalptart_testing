const router = require('express').Router();
const { neworder } = require("../controllers/order");
const {requiresignin}  = require("../middleware/authcheck");


router.post('/neworder', requiresignin,  neworder);

module.exports = router;