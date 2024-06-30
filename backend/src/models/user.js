const mongoose = require('mongoose');
// console.log("model")
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     password:{
        type:String,
        required:true
     }


});
 module.exports = mongoose.model('user',userSchema);