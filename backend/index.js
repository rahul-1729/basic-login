const express = require('express');
const connectDB = require('./src/config/db');

const app = express();
connectDB()
// app.use();

PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log("Connected to server 4000");
})
