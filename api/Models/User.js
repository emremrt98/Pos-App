const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
}, { timestamps: true }
);


const User = mongoose.model("UserModel", UserSchema);

module.exports = User;