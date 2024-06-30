const mongoose = require("mongoose")
const  mongoURI = "mongodb://localhost:27017/User_data"

const connectDB = async()=>{

    try{
          await mongoose.connect(mongoURI)
          console.log("connected to mongoose database");
    }catch(error)
    {
        console.log("couldn't connect to the database",error);
        process.exit(1);
    }
}
module.exports =connectDB