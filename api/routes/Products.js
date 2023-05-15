const router = require('express').Router();
const productsController = require('../controllers/ProductsController.js');


router.get('/get-all', productsController.getAllProducts);
router.post('/add-category', productsController.createProducts);
router.put('/update-category', productsController.updateProducts);
router.delete('/delete-category', productsController.deleteProducts);
module.exports = router;