const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;
const connectDb = require("./config/dbConnection")

connectDb();

app.use(express.json()); //This won't work if you put it down here

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
app.get("/users",(req,res)=>{
    console.log("Welcome!");
    res.send("Welcome!");
})

// app.get("/api/contact",(req,res)=>{
//     console.log("Welcome");
//     res.send("Welcome")
// })