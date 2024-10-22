const express = require('express');
const dotenv = require('dotenv');
const connectToDatabase = require('./middlewire/DbConnecter');

dotenv.config();

const app = express();


// middlewires
connectToDatabase();

app.use(express.json());


app.listen(process.env.PORT || 4008, ()=>{
    console.log("Server started")
})