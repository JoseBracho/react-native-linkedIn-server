const mongoose = require("mongoose");
const {Schema, model} = mongoose

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    userName: {
        type:String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

userSchema.methods.toJSON = function () {
    const {password, ...user} = this.toObject();
    return user;
}

module.exports = model("users", userSchema);