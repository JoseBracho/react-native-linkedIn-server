require("dotenv").config();
require("colors")
const express = require("express");

class Server {
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;
    }
    getConnection(){
        this.app.listen(this.PORT, () =>{
            console.log()
            console.log("***********************************************".bgGreen)
            console.log()
            console.log("           ",`Server on PORT ${this.PORT}`.bgCyan);
            console.log()
            console.log("***********************************************".bgGreen)
            console.log()
        })
    }
}

module.exports = Server;