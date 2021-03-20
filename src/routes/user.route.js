const { Router } = require("express");
const { userRegister, userUpdate , userAuth, userInfo } = require("../controllers/user.controllers");


const route = Router();

route.post('/register', userRegister);
route.post('/auth', userAuth);
route.get('/profile/:id', userInfo);
route.put('/update', userUpdate);


module.exports = route;