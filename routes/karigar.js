const express = require('express');
const { createKarigar, getKarigar, getKarigarById, deleteKarigarById, updateKarigar } = require('../controllers/karigar');



const router = express.Router();

router.post('/createKarigar',createKarigar);
router.get('/getKarigar',getKarigar)
router.get('/getKarigarById',getKarigarById);
router.get('/deleteKarigar',deleteKarigarById);
router.get('/updateKarigar',updateKarigar);

module.exports= router;