const express = require("express")
const bodyParser = require("body-parser")
const app = express()

// Database connection
const dbConnect = require("./db/dbConnect");
dbConnect();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (request, response, next)=>{
    response.json({message:"Success! Server is Working"});
    next();
})
module.exports = app;
