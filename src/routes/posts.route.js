const { Router } = require("express");
const { check } = require("express-validator");

const route = Router();

const { publish, shared, view, deletePublish } = require("../controllers/posts.controllers");
const validateToken = require("../middleware/validateToken");

route.get("/publish/", validateToken, publish);
route.get("/shared/:id", validateToken, shared);
route.get("/view/", validateToken , view);
route.delete("/delete/:id", validateToken , deletePublish);

module.exports = route;