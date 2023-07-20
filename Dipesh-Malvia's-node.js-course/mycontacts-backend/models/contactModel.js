const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter Your Name."]
    },
    age:{
        type:Number,
        required:[true,"Please Enter Your Age"]
    },
    phone:{
        type:String,
        required:[true,"Please Enter your Phone number"]
    },
    email:{
        type:String,
        required:[true,"Please Enter your email"]
    },
},  
    {
        timestamp:true,
    }
    

);

module.exports = mongoose.model("Contact",contactSchema);
