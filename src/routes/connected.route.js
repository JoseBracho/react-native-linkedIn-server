const {Router} = require("express");
const route = Router();

const { connectGet } = require("../controllers/connected.controllers");
const validateToken = require("../middleware/validateToken");

route.get("/", validateToken, connectGet);

module.exports = route;