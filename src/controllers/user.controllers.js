const {request, response} = require("express");

const userRegister = (req = request, res = response) => {
    const body = req.body;
    res.json(body)
}

const userAuth = (req = request, res = response) => {
    res.send("Auth!")
}

const userInfo = (req = request, res = response) => {
    res.send("Info!");
}

const userUpdate = (req = request, res = response) => {
    res.send("Update!");
}


module.exports = {
    userRegister,
    userAuth,
    userInfo,
    userUpdate
}