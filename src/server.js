require("dotenv").config();
require("colors");

const express = require("express");

const dbConnection = require("./db/config"); 

class Server {
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;

        //this.getMongooseConnectionOnline();
        this.getServerConnection();

        this.routes();
    }
    
    async getMongooseConnectionOnline(){
        await dbConnection();
    }
    getServerConnection(){
        this.app.listen(this.PORT, () =>{
            console.log()
            console.log("***********************************************".bgGreen)
            console.log()
            console.log("           ",` Server on PORT ${this.PORT} `.bgCyan);
            console.log()
            console.log("***********************************************".bgGreen)
            console.log()
        })
    }

    routes(){
        this.app.use("/user", require("./routes/user.route") );
    }
}

module.exports = Server;