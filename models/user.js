const { default: mongoose } = require("mongoose");

let userSchema= new mongoose.Schema({

    name:{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:4,
        trim:true
    },
    avatar:{
        type:String,
        required:true,
        trim:true
    }
});

let User = mongoose.model('users', userSchema);

module.exports = User,userSchema;

