const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: { type: String, require: true },
    image: { type: String, require: true},
    price: { type: Number, require: true},
    category: { type: String, require: true},
}, { timestamps: true }
);


const Product = mongoose.model("ProductModel", ProductSchema);

module.exports = Product;