const {response, request} = require("express");

const connectGet = (req = request, res = response) => {
    const id = req.id
    const body = req.body;

    res.send(id)

}

module.exports = {
    connectGet
}