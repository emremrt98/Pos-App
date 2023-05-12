const router = require('express').Router();
const categoriesController = require('../controllers/CategoriesController');

router.post('/add-category', categoriesController.createCategories);

module.exports = router;