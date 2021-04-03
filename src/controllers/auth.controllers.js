const { request, response } = require("express");
const bcrypt = require("bcrypt");

const User = require("../model/user.model");
const generateJsonwebtoken = require("../helpers/generateJsonwebtoken");

const userRegister = (req = request, res = response) => {
  let body = req.body;
  let user = new User({
    ...body,
    password: bcrypt.hashSync(body.password, 10),
  });
  user.save((err, userDB) => {
    if (err) {
      console.log(err); //Do not delete this line in case an error occurs to see the log
      res.status(500).json({
        done: false,
        error: "Communicate with the programmer: joseluisbracho0@gmail.com",
      });
    }
    return res.json({
      userDB,
    });
  });
};
const userLogin = async (req = request, res = response) => {
  const body = req.body;
  const { userName, email, password } = body;
  try {
    let user = null;
    if (userName) {
      user = await User.findOne({ userName });
    }
    if (email) {
      user = await User.findOne({ email });
    }
    const validatePassword = bcrypt.compareSync(password, user.password);
    if (!validatePassword) {
      return res.status(400).json({
        done: false,
        error: "The username or password is incorrect",
      });
    }
    let token = await generateJsonwebtoken(user._id)
    res.json({ done: true, token });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Enter username or email",
    });
  }
};
module.exports = {
  userRegister,
  userLogin,
};
