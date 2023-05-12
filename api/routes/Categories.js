const Category = require('../Models/Category');
const router = require('express').Router();

router.post('/add-category', async (req, res) => {
    try {
        console.log('selam');
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(200).send({
            succeed: true,
            newCategory,
        })
    } catch (error) {
        res.status(404).json({ error });
    }
});

module.exports = router;