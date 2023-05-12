const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BillSchema = new Schema({
    customerName: { type: String, require: true },
    customerPhoneNumber: { type: String, require: true },
    paymentMode: { type: Number, require: true },
    subTotal: { type: Number, require: true },
    tax: { type: Number, require: true },
    totalAmount: { type: Number, require: true },
    cartItems: { type: Array, require: true },
}, { timestamps: true }
);


const Bill = mongoose.model("BillModel", BillSchema);

module.exports = Bill;