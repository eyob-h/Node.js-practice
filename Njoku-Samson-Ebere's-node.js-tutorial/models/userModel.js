const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please provide your username"],
        unique:[ true, "Username already exists"]
    },
    email:{
        type: String,
        required: [true, "Please provide your email address"],
        unique:[ true, "Email already exists"]
    },
    password:{
        type: String,
        required: [true, "Please provide your password"],
        unique:[ false]
    },
    
})

module.exports = mongoose.model.UserX || mongoose.model("UserX", UserSchema)