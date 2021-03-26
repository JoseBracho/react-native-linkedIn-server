const { Router } = require("express");


const {
  userUpdate,
  userInfo,
} = require("../controllers/user.controllers");

const validatefields = require("../middleware/validatefields");

const route = Router();


route.get("/profile/:id", [validatefields], userInfo);
route.put("/update", [validatefields], userUpdate);

module.exports = route;