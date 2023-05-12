const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Routes
const CategoryRoute = require('./routes/Categories.js');

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

const connect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Pos-App');
        console.log("Connected to MongoDB");
    } catch (err) {
        console.log("Bağlantı Kurulamadı", err);
    }
}



app.use('/api/categories', CategoryRoute);


app.listen(PORT, async () => {
    await connect();
    console.log(PORT, "Aktif");
})