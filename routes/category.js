const exprees = require('express');
const { createCategory, getCategory, deleteCategory, updateCategory } = require('../controllers/category');
const {requiresignin}  = require("../middleware/authcheck");
const router=exprees.Router();

router.post('/createCategory', requiresignin, createCategory);
router.get('/getCategory', requiresignin, getCategory);
router.post('/deleteCategory', requiresignin, deleteCategory);
router.post('/updateCategory', requiresignin, updateCategory);

module.exports= router;
