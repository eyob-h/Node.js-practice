const express = require("express");
// const connectDb = require("./config/dbConnection");
// const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });