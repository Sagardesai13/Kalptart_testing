const exprees = require('express');
const { createClient, getClient, getClientById, updateClient, deleteClientById } = require('../controllers/client');
const {requiresignin}  = require("../middleware/authcheck");
const router=exprees.Router();

router.post('/createClient', requiresignin, createClient);
router.get('/getClient', requiresignin, getClient);
router.get('/getClientById', requiresignin, getClientById);
router.get('/deleteClient', requiresignin, deleteClientById);
router.get('/updateClient', requiresignin, updateClient);

module.exports= router;