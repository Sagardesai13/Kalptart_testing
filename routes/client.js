const exprees = require('express');
const { createClient, getClient, getClientById, updateClient, deleteClientById } = require('../controllers/client');

const router=exprees.Router();

router.post('/createClient',createClient);
router.get('/getClient',getClient);
router.get('/getClientById',getClientById);
router.get('/deleteClient',deleteClientById);
router.get('/updateClient',updateClient);

module.exports= router;