const mongoose  = require("mongoose"); //adds mongoose to the user.js
const UserSchema = new mongoose.Schema({ //creates a class that passes the following data
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('user', UserSchema)  //exports the data to mongoose middleware