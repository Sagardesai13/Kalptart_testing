const exprees = require('express');
const { createCategory, getCategory, deleteCategory, updateCategory } = require('../controllers/category');

const router=exprees.Router();

router.post('/createCategory',createCategory);
router.get('/getCategory',getCategory);
router.post('/deleteCategory',deleteCategory);
router.post('/updateCategory',updateCategory);

module.exports= router;
