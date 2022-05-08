const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

var storage = multer.diskStorage({

    destination:function(req, file, cb){
        cb(null, './uploads/orders')
    },
    filename:function(req, file, cb){
        cb(null, shortid.generate() + '-' + Date.now() + path.extname(file.originalname));
    }
})

exports.upload = multer({storage: storage})