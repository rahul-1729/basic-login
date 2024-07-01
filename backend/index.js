const express = require('express');
const cors = require('cors')
const connectDB = require('./src/config/db');
const userRoutes = require("./src/routes/user")
// require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors());
connectDB()
app.use('/api/user',userRoutes);

PORT = 4000;

app.listen(PORT,()=>{
    console.log(`Connected to server ${PORT}`);
})
