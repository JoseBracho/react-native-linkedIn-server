const { Router } = require("express");
const { check } = require("express-validator");

const route = Router();

const { postPublish } = require("../controllers/posts.controllers");
const validateToken = require("../middleware/validateToken");

route.get("/publish/", validateToken ,postPublish);
//route.get("/view/", validateToken ,postPublish);
//route.get("/share/", validateToken ,postPublish)

module.exports = route;