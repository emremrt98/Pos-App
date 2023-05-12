const Category = require('../Models/Category');

const createCategories = async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(200).send({
            succeed: true,
            newCategory,
        })
    } catch (error) {
        res.status(404).json({ error });
    }
}

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).send({
            succeed: true,
            categories,
        })
    } catch (error) {
        res.status(404).json({ error });
    }
}

module.exports = {
    createCategories,
    getAllCategories
};