const express = require('express');
const createconnection = require('./config/db');
const cors = require ("cors");
const { Userrouter } = require('./routes/userroutes');
const { Productrouter } = require('./routes/productroutes');

const authMiddleware = require('./middleware.js');
const { Cartrouter } = require('./routes/cartroute');
const app = express();

app.use(cors());
app.use(express.json());
//middleware----------

app.use("/users",Userrouter)

app.use("/product",Productrouter)

app.use("/cart",Cartrouter)

//-----------------
app.listen(3300,(req, res)=>{
    createconnection()
    console.log("server is running at 3300")
})