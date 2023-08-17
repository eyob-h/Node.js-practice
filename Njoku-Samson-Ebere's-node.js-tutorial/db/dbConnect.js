const mongoose = require("mongoose")
require('dotenv').config()

async function dbConnect(){
    mongoose.connect(
        process.env.DB_URL,
        {
            // useNewUrlParse: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        }
    )
    .then(()=>{
        console.log("Database Connected Successfully!")
    })
    .catch((error)=>{
            console.log("Unable to Connect to Database!")
            console.log(error);

        })
    

}
module.exports = dbConnect;

// old CONNECTION_STRING =  mongodb+srv://<username>:<password>@cluster0.jdtzok9.mongodb.net/?retryWrites=true&w=majority