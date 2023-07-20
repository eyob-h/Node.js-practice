const express = require("express");
// const connectDb = require("./config/dbConnection");
// const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

// app.get("/api/contact",(req,res)=>{
//     console.log("Welcome");
//     res.send("Welcome")
// })