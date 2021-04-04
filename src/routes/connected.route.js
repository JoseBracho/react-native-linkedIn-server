const {Router} = require("express");
const route = Router();

const { send, received, agree, deleteConnected, connected} = require("../controllers/connected.controllers");
const validateToken = require("../middleware/validateToken");

route.get("/", validateToken, connected);
route.post("/send", validateToken, send);
route.get("/received", validateToken, received);
route.get("/agree/:id", validateToken, agree);
route.get("/delete/:id", validateToken, deleteConnected);

module.exports = route;