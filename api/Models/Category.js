const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    title: { type: String, require: true },
}, { timestamps: true }
);


const Category = mongoose.model("CategoryModel", CategorySchema);

module.exports = Category;