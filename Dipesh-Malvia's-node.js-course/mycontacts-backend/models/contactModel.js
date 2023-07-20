const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please Enter Your Name."]
    },
    age:{
        type:String,
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
        timestamps:true,
    }
    

);

module.exports = mongoose.model("Contact",contactSchema);
