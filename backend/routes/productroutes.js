const express = require('express');
const { addProducts, getProducts, updateProducts, deleteProducts } = require('../controller/productController');

const Productrouter = express.Router();

Productrouter.post("/addProduct",addProducts)
Productrouter.get("/",getProducts)
Productrouter.patch("/update/:id",updateProducts)
Productrouter.delete("/delete/:id",deleteProducts)

module.exports = {Productrouter}