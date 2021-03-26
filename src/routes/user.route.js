const { Router } = require("express");
const { check } = require("express-validator");

const {
  userRegister,
  userUpdate,
  userAuth,
  userInfo,
} = require("../controllers/user.controllers");
const {
  userNameValidator,
  passwordValidator,
  nameValidator,
  emailValidator,
} = require("../helpers/dbValidator");
const validatefields = require("../middleware/validatefields");

const route = Router();

route.post(
  "/register",
  [
    check("name", "You must enter the name").not().isEmpty(),
    check("name").custom(nameValidator),
    check("userName", "You must enter the userName").not().isEmpty(),
    check("userName").custom(userNameValidator),
    check("password").custom(passwordValidator),
    check("email", "You must enter the email").not().isEmpty(),
    check("email").custom(emailValidator),
    validatefields,
  ],
  userRegister
);
route.post(
  "/auth",
  [
    check("userName", "You must enter the userName").not().isEmpty(),
    check("userName").custom(userNameValidator),
    check("password").custom(passwordValidator),
    validatefields,
  ],
  userAuth
);
route.get("/profile/:id", [validatefields], userInfo);
route.put("/update", [validatefields], userUpdate);

module.exports = route;
