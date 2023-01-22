const express = require("express");
const { getCart, addCart, updateCart, delCart } = require("../controller/cartController");

const Cartrouter = express.Router();

Cartrouter.get("/:userid",getCart);
Cartrouter.post("/addCart",addCart);
Cartrouter.patch("/updateCart/:id",updateCart);
Cartrouter.delete("/deleteCart/:id",delCart);

module.exports = {Cartrouter};
