const express = require('express');
// const connectDB = require('./config/db');

const app = express();

// app.use();

PORT = process.env.PORT||4000;

app.listen(PORT,()=>{
    console.log("Connected to server 4000");
})
