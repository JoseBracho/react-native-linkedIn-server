const {request, response} = require("express");
const bcrypt = require("bcrypt");

const User = require("../model/user.model");

const userRegister = (req = request, res = response) => {
    let body = req.body;
    let user = new User({
        ...body,    
        password: bcrypt.hashSync(body.password, 10)
    });
  user.save((err, userDB) => {
    if (err) {
      res.status(500).json({
        err,
      });
    }
    return res.json({
      userDB,
    });
   });
}

const userLogin = (req = request, res = response) => {
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
    userLogin,
    userInfo,
    userUpdate
}