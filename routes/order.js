const router = require('express').Router();
const { newOrders, getOrders, getOrderById, deleteOrder, editOrders } = require("../controllers/order");
const {requiresignin}  = require("../middleware/authcheck");


router.post('/newOrders', requiresignin,  newOrders);
router.get('/getOrders', requiresignin, getOrders);
router.get('/getOrder/:id', requiresignin, getOrderById);
router.delete('/deleteOrder/:id', requiresignin, deleteOrder);
router.put('/editOrders/:id', requiresignin, editOrders);

module.exports = router;