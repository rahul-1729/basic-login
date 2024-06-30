const express = require("express");
const User = require('.././models/user')
const router = express.Router();
// console.log("route")
router.post('/signup',async(req,res)=>{

     
   try{
        const {name,email,password} = req.body;
        const user = new User({name,email,password});
        await user.save();
        res.status(201).json({message:"User data saved"});
         
   }catch(error)
   {
       res.status(500).json({error:"Server issue"})
   }
   
});

module.exports = router;