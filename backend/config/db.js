const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URL } = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch((err) => {
    console.log(err);
  });
