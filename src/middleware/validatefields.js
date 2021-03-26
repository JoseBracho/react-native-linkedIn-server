const {validationResult} = require("express-validator");
const {request, response} = require("express");

const validatefields = (req = request, res = response, next) => {
    const err = validationResult(req);
    if(!err.isEmpty()){
        const {errors} = err
        return res.status(400).json({error:errors[0]?.msg})
    }
    next();
}

module.exports = validatefields;