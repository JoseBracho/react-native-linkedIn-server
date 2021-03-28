const { Router } = require("express");


const {
  userUpdate,
  userInfo,
} = require("../controllers/user.controllers");

const validatefields = require("../middleware/validatefields");

const route = Router();


route.get("/:id", [validatefields], userInfo);
route.put("/update/:id", [validatefields], userUpdate);

module.exports = route;