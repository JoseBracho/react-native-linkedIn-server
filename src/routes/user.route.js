const { Router } = require("express");
const { check } = require("express-validator");

const route = Router();

const { userUpdate, userInfo } = require("../controllers/user.controllers");

const { nameUpdate, emailUpdate, userNameValidator } = require("../helpers/dbValidator");
const validatefields = require("../middleware/validatefields");
const validateToken = require("../middleware/validateToken");

route.get("/", [validateToken], userInfo);
route.put(
  "/update/",
  [
    validateToken, 
    check("name").custom(nameUpdate),
    check("userName").custom(userNameValidator),
    check("email").custom(emailUpdate),
    validatefields
  ],
  userUpdate
);

module.exports = route;
