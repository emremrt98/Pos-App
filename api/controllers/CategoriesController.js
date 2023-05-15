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

const updateCategories = async (req, res) => {
    try {
        await Category.findOneAndUpdate({ _id: req.body._id }, req.body);
        res.status(200).send({
            succeed: true,
            message: "Updated category",
        })
    } catch (error) {
        res.status(404).json({ error });
    }
}

const deleteCategories = async (req, res) => {
    try {
        await Category.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            succeed: true,
            message: "Deleted category",
        })
    } catch (error) {
        res.status(404).json({ error });
    }
}

module.exports = {
    createCategories,
    getAllCategories,
    updateCategories,
    deleteCategories,
};