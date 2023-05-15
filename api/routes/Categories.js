const router = require('express').Router();
const categoriesController = require('../controllers/CategoriesController');


router.get('/get-all', categoriesController.getAllCategories);
router.post('/add-category', categoriesController.createCategories);
router.put('/update-category', categoriesController.updateCategories);
router.delete('/delete-category', categoriesController.deleteCategories);
module.exports = router;