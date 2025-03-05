const express = require('express');
require('dotenv').config();
const Router = require('./api/Route');
const app = express();
const path = require("path");
const cors = require('cors');
require("./config/db");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT ||3000;
app.use(cors());
app.use(express.static('public'));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use('/api', Router);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})