const { request, response } = require("express");
const User = require("../model/user.model");

const userInfo =  (req = request, res = response) => {
  const id = req.id;
  User.findById(id, (err, userDB) => {
    if (err) {
      return res.status(500).json({
        done: false,
        err,
      });
    }
    res.json({
      done: true,
      userDB,
    });
  });
};
const userUpdate =  (req = request, res = response) => {
  const id = req.id;
  const body = req.body;
  User.findByIdAndUpdate(id, body, (err, userDB) => {
    if (err) {
      return res.status(500).json({ done: false, error: "Server error" });
    }
    res.json({ done: true, msg: "Data was updated successfully"});
  });
};
module.exports = {
  userInfo,
  userUpdate,
};
