const router = require('express').Router();
const categoriesController = require('../controllers/CategoriesController');


router.get('/get-all', categoriesController.getAllCategories);
router.post('/add-category', categoriesController.createCategories);

module.exports = router;