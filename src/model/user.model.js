const mongoose = require("mongoose");
const {Schema, model} = mongoose

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    userName:{
        type:String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    email:{
        type:  String,
        unique: true
    },
    phone:{
        type: String
    },
    job:{
        type: String
    },
    education:{
        type: String
    },
    sex:{
        type: String
    },
    description:{
        type: String
    },
    img:{
        type: String
    }
})

userSchema.methods.toJSON = function () {
    const {password,__v, ...user} = this.toObject();
    return user;
}

module.exports = model("users", userSchema);