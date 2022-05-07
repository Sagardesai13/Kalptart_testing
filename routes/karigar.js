const express = require('express');
const { createKarigar, getKarigar, getKarigarById, deleteKarigarById, updateKarigar } = require('../controllers/karigar');
const {requiresignin}  = require("../middleware/authcheck");


const router = express.Router();

router.post('/createKarigar', requiresignin, createKarigar);
router.get('/getKarigar' , requiresignin, getKarigar)
router.get('/getKarigarById' , requiresignin, getKarigarById);
router.get('/deleteKarigar' , requiresignin, deleteKarigarById);
router.get('/updateKarigar' , requiresignin, updateKarigar);

module.exports= router;