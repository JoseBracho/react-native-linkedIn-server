const {request, response} = require("express");


const userInfo = (req = request, res = response) => {
    res.send("Info!");
}

const userUpdate = (req = request, res = response) => {
    res.send("Update!");
}


module.exports = {
    userInfo,
    userUpdate
}