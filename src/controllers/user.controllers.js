const {request, response} = require("express");
const User = require("../model/user.model");

const userInfo = async (req = request, res = response) => {
    const id = req.params.id;
    const user = await User.findById(id)
    res.json(user);
}
const userUpdate = async (req = request, res = response) => {
    const id = req.params.id;
    const body = req.body;
    try{
       const user = await User.findByIdAndUpdate(id, body)
       res.json({done: true})
    }catch {
        res.json({done: false})
    }
}
module.exports = {
    userInfo,
    userUpdate
}