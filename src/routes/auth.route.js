const { Router } = require("express");
const { check } = require("express-validator");

const route = Router();

const validatefields = require("../middleware/validatefields");

const {
    userRegister,
    userLogin
} = require("../controllers/auth.controllers")
const {
    userNameValidator,
    passwordValidator,
    nameValidator,
    emailValidator,
    userLoginValidator,
    emailLoginValidator,
} = require("../helpers/dbValidator");

route.post(
    "/register",
    [
      check("name", "You must enter the name").not().isEmpty(),
      check("userName", "You must enter the userName").not().isEmpty(),
      check("password", "You must enter the password").not().isEmpty(),
      check("email", "You must enter the email").not().isEmpty(),
      check("name").custom(nameValidator),
      check("userName").custom(userNameValidator),
      check("password").custom(passwordValidator),
      check("email").custom(emailValidator),
      validatefields,
    ],
    userRegister
  );
route.post(
    "/login",
    [
      check("password", "You must enter the password").not().isEmpty(),
      check("userName").custom(userLoginValidator),
      check("email").custom(emailLoginValidator),
      validatefields,
    ],
    userLogin
);
module.exports = route;