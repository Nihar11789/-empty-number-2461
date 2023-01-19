const express = require('express');
const { addProducts, getProducts, updateProducts, deleteProducts } = require('../controller/productController');
const authMiddleware = require('../middleware');

const Productrouter = express.Router();
//Productrouter.use(authMiddleware)

Productrouter.post("/addProduct",addProducts)
Productrouter.get("/",getProducts)
Productrouter.patch("/update/:id",updateProducts)
Productrouter.delete("/delete/:id",deleteProducts)

module.exports = {Productrouter}