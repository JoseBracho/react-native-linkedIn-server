const mongoose = require("mongoose");

const dbConnection = async () => {
    try{
        await mongoose.connect(process.env.MONGOOSE_CONNECTION,{
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log()
        console.log("***********************************************".bgGreen)
        console.log()
        console.log("           "," Mongoose online ".bgYellow);
        console.log()
        console.log("***********************************************".bgGreen)
        console.log()
    }catch(err){
        console.log(err)
    }
}

module.exports = dbConnection;