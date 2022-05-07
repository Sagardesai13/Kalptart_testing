const router = require('express').Router();
const { newOrders, getOrders, getOrderById, deleteOrder, editOrders } = require("../controllers/order");
const { pdfGenerate } = require('../controllers/pdfGenrate');
const {requiresignin}  = require("../middleware/authcheck");
const { upload } = require("../middleware/uploads")


router.post('/newOrders', requiresignin, upload.array("orderImg", 5), newOrders);
router.get('/getOrders', requiresignin, getOrders);
router.get('/getOrder/:id', requiresignin, getOrderById);
router.delete('/deleteOrder/:id', requiresignin, deleteOrder);
router.put('/editOrders/:id', requiresignin, upload.array("orderImg", 5), editOrders);

module.exports = router;