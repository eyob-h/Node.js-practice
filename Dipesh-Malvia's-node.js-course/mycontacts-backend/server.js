const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler")
const connectDb = require("./config/dbConnection")

connectDb();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); //This won't work if you put it down here
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// app.use(express.json()); //Right here
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

// app.get("/api/contact",(req,res)=>{
//     console.log("Welcome");
//     res.send("Welcome")
// })