const router = require('express').Router();
const { newOrders, getOrders, getOrderById, deleteOrder, editOrders } = require("../controllers/order");
const {requiresignin}  = require("../middleware/authcheck");
const { upload } = require("../middleware/uploads")

const { default: mongoose } = require('mongoose');
var multer  = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
var upload = multer({ storage: storage })



router.post('/newOrders', requiresignin, upload.array("orderImg", 5), newOrders);
router.get('/getOrders', requiresignin, getOrders);
router.get('/getOrder/:id', requiresignin, getOrderById);
router.delete('/deleteOrder/:id', requiresignin, deleteOrder);
router.put('/editOrders/:id', requiresignin, editOrders);



router.post('/getImages', upload.array('profile-files', 12), function (req, res, next) {
    // req.files is array of `profile-files` files
    // req.body will contain the text fields, if there were any
    var response = '<a href="/">Home</a><br>'
    response += "Files uploaded successfully.<br>"
    for(var i=0;i<req.files.length;i++){
        response += `<img src="${req.files[i].path}" /><br>`
    }
    return res.send(response)
})
   


// router.post('/getImages', upload.array('product_imgs'),(req,res,next)=>{

//     console.log(req.file);
//     const order = new Order({
//         _id:new mongoose.Types.ObjectId(),
//         name:req.body.name,
//         price:req.body.price
//     });
//     order
//     .save()
//     .then(result =>{
//         console.log(result);
//         res.status(201).json({
//             message:"Created product successfully",
//             createdProduct:{
//                 _id:result._id,
//                 request:{
//                     type:'GET',
//                     url:"http://localhost:3000/getImages"+result._id
//                 }
//             }
//         })
//     })
//     .catch(err=>{
//         console.log(err);
//         res.status(500).json({
//             error:err
//         })
//     })
// });

module.exports = router;