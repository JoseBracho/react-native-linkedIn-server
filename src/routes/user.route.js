const { Router } = require("express");
const { check } = require("express-validator");

const {
  userRegister,
  userUpdate,
  userAuth,
  userInfo,
} = require("../controllers/user.controllers");
const validatefields = require("../middleware/validatefields");

const route = Router();

route.post(
  "/register",
  [
    check("userName", "You must enter the userName").not().isEmpty(),
    check("name", "You must enter the name").not().isEmpty(),
    check("password","the password must be greater than 6 characters").isLength({ min: 6 }),
    validatefields,
  ],
  userRegister
);
route.post(
  "/auth", 
  [
    check("userName", "You must enter the userName").not().isEmpty(),
    check("password","the password must be greater than 6 characters").isLength({ min: 6 }),
    validatefields,
  ], 
  userAuth
);
route.get("/profile/:id", [validatefields], userInfo);
route.put("/update", [validatefields], userUpdate);

module.exports = route;
