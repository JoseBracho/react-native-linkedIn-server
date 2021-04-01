const { Router } = require("express");
const { check } = require("express-validator");

const route = Router();

const { userUpdate, userInfo } = require("../controllers/user.controllers");

const { nameValidator, emailUpdate, userNameValidator } = require("../helpers/dbValidator");
const validatefields = require("../middleware/validatefields");

route.get("/:id", [validatefields], userInfo);
route.put(
  "/update/:id",
  [ 
    check("name").custom(nameValidator),
    check("userName").custom(userNameValidator),
    check("email").custom(emailUpdate),
    validatefields
  ],
  userUpdate
);

module.exports = route;
