const Product = require('../Models/Product');

const createProducts = async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(200).send({
            succeed: true,
            newProduct,
        })
    } catch (error) {
        res.status(404).json({ error });
    }
}

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send({
            succeed: true,
            products,
        })
    } catch (error) {
        res.status(404).json({ error });
    }
}

const updateProducts = async (req, res) => {
    try {
        await Product.findOneAndUpdate({ _id: req.body._id }, req.body);
        res.status(200).send({
            succeed: true,
            message: "Updated Product",
        })
    } catch (error) {
        res.status(404).json({ error });
    }
}

const deleteProducts = async (req, res) => {
    try {
        await Product.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            succeed: true,
            message: "Deleted product",
        })
    } catch (error) {
        res.status(404).json({ error });
    }
}

module.exports = {
    createProducts,
    getAllProducts,
    updateProducts,
    deleteProducts,
};