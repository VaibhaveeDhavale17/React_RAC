const mongoose = require("mongoose");

const userSchema =new mongoose.Schema({
    userName:{
        type : String,
        required :[true,"Please enter a name"]
    },

    userEmail:{
        type: String,
        required: [true,"Please enter a email"],
        unique: true,
        trim: true,
        match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"Please enter a valid email"],

    },

    userPassword:{
        type : String,
        required :[true,"Please enter a password"],
        minLength: [6,"Password must be up to 6 characters"],
        maxLength: [25,"Password must not be more than 25 characters"],
    }
},{
    timestamps: true
});

module.exports = mongoose.model("User",userSchema);