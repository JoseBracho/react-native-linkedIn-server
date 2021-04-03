const { Router } = require("express");
const { check } = require("express-validator");

const route = Router();

const { postPublish } = require("../controllers/posts.controllers");

route.get("/publish/:id", postPublish)

module.exports = route;