require("dotenv").config();
require("colors");

const express = require("express");
const cors = require("cors");

const dbConnection = require("./db/config"); 

class Server {
    constructor(){
        this.app = express();
        this.PORT = process.env.PORT;

        this.getMongooseConnectionOnline();
        this.getServerConnection();
        this.middleWare();
        this.routes();
    }
    
    middleWare(){
        this.app.use(express.static("public"));
        this.app.use(express.urlencoded({extended: false}));
        this.app.use(cors());
        this.app.use(express.json());
    }

    async getMongooseConnectionOnline(){
        await dbConnection();
    }
    getServerConnection(){
        this.app.listen(this.PORT, () =>{
            console.log()
            console.log("***********************************************".bgGreen)
            console.log()
            console.log("           ",` Server on PORT ${this.PORT} `.bgCyan.black);
            console.log()
            console.log("***********************************************".bgGreen)
            console.log()
        })
    }
    routes(){
        this.app.use("/user/auth", require("./routes/auth.route") );
        this.app.use("/user/profile", require("./routes/user.route"))
    }
}

module.exports = Server;