const {validationResult} = require("express-validator");
const {request, response} = require("express");

const validatefields = (req = request, res = response, next) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json(error)
    }
    next();
}

module.exports = validatefields;