const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const schema = new mongoose.Schema({
    first_name: { type:String, default : '' }, //username 
    last_name: { type:String, default : '' },
    email: String,
    password: String,
    profile_image: { type:String, default : '' }, //profilePicture
    occupation: { type:String, default : '' },
    address: { type:String, default : '' },
   
    followers: {
        type: Array,
        default: [],
      },
    followings: {
    type: Array,
    default: [],
    },
    is_business_owner: {
    type: Boolean,
    default: false,
    }
    },{
        timestamps:true
});

schema.pre('save', function(next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

const User = mongoose.model('User', schema);

module.exports = User;