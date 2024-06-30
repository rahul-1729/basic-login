const mongoose = require("mongoose")
const  mongoURI = "mongodb://localhost:27017/"

const connectDB = async()=>{

    try{
          await mongoose.connect(mongoURI,{
              useUnifiedTopology:true
          })
          console.log("connected to mongoose database");
    }catch(error)
    {
        console.log("couldn't connect to the database",error);
    }
}
module.exports =connectDB