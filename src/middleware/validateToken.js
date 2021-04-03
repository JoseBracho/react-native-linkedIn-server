const { request, response } = require("express");
const jwt = require("jsonwebtoken");

const validateToken = (req = request, res = response, next) => {
    const token = req.header("authorization");
        if(!token){
            res.status(401).json({
                expire: false,
                msg: "No token"
            })
        }
    try{
       const {id} = jwt.verify(token, process.env.TOKEN_KEY);
       req.id = id;
       next();
    }catch(err){
        console.log(err)
        res.status(401).json({
            expire: true,
            msg: "invalid token"
        })
    }
}
module.exports = validateToken;