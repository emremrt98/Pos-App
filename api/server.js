const express = require('express');
const conn = require('./database/connection');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Routes
const CategoryRoute = require('./routes/Categories.js');

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());


app.use('/api/categories', CategoryRoute);


app.listen(PORT, async () => {
    await conn();
    console.log(PORT, "Aktif");
})