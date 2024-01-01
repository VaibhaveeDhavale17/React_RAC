const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
        select: false,
    },

    role: {
        type: String,
        default: "user",
      },
},{
    timestamps: true
});

// Password Encryption

userSchema.pre("save", async function (next) {
    if (!this.isModified("userPassword")) {
      next();
    }
  
    this.userPassword = await bcrypt.hash(this.userPassword, 10);
  });


  // JWT TOKEN

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };


// Compare Password

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.userPassword);
  };

module.exports = mongoose.model("User",userSchema);