const express = require('express');
const createconnection = require('./config/db');
const cors = require ("cors");
const { Userrouter } = require('./routes/userroutes');
const { Productrouter } = require('./routes/productroutes');
const app = express();

app.use(cors());
app.use(express.json());
//middleware----------

app.use("/users",Userrouter)
app.use("/product",Productrouter)
//-----------------
app.listen(3300,(req, res)=>{
    createconnection()
    console.log("server is running at 3300")
})