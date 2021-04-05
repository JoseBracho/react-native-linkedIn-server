const {Router} = require("express");
const route = Router();

const { send, received, agree, deleteConnected, connected} = require("../controllers/connected.controllers");
const validateToken = require("../middleware/validateToken");

route.get("/", validateToken, connected);
route.post("/send", validateToken, send);
route.get("/received", validateToken, received);
route.put("/agree/:id", validateToken, agree);
route.delete("/delete/:id", validateToken, deleteConnected);

module.exports = route;