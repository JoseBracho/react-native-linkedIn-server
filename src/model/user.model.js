const mongoose = require("mongoose");
const {Schema, model} = mongoose

const userShema = new Schema({
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

module.exports = model("users", userShema);