const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const connectToDatabase = require('./middlewire/DbConnecter');
const UserRouter = require('./routers/UserRoute')
dotenv.config();

const app = express();


// middlewires
connectToDatabase();

app.use(express.json());
app.use(cors())


//Routers

app.use('/',UserRouter)



app.listen(process.env.PORT || 4008, ()=>{
    console.log("Server started")
})