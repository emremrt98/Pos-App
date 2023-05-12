const mongoose = require('mongoose');

const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Pos-App');
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Bağlantı Kurulamadı", err);
    }
}


module.exports = connect;