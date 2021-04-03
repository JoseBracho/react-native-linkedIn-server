const jwt = require("jsonwebtoken");

const generateJsonwebtoken = (id) => {
    return new Promise((resolve, reject) => {
        const  payload = {id};
        jwt.sign(payload, process.env.TOKEN_KEY, {
            expiresIn: "1h"
        },(err, token) => {
            if(err){
                reject("the token could not be generated")
            }else{
                resolve(token)
            }
        });
    })
}

module.exports = generateJsonwebtoken