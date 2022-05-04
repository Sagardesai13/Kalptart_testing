const router = require('express').Router();
const { newOrders, getOrders } = require("../controllers/order");
const {requiresignin}  = require("../middleware/authcheck");


router.post('/newOrders', requiresignin,  newOrders);
router.get('/getOrders', requiresignin, getOrders);

module.exports = router;