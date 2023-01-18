const jwt = require("jsonwebtoken");
const productModel = require("../mediaModel/productModel");
const env = require("dotenv");
env.config()

const secret = process.env.SECRET
//POST request-----------------------------------------------------
async function addProducts(req, res){
      try {
        const token = req.headers.authorization
        let user = await jwt.verify(token, secret)
        const post = req.body
        post.userID = user.id
        await productModel.create(req.body);

        res.send({
            "success": true,
            "message": "product added successfully"
        })
      } catch (error) {
        res.status(400).send({
            "success": false,
            "message": error
        })
      }
}

//GET request----------------------------------------------------

async function getProducts(req, res){
    try {
        const token = req.headers.authorization
        let user = await jwt.verify(token, secret)
        
        let post = await productModel.find()
        res.send({
            "success": true,
            "message": post
        })
    } catch (error) {
        res.send({
            "success": false,
            "message": error
        })
    }
}

//DELETE request----------------------------------------------------
async function deleteProducts(req, res){
    try {
        const id = req.params.id
        await productModel.findByIdAndDelete(id);
        res.send({
            "success": true,
            "message":"deleted successfully"
        })

    } catch (error) {
        res.send({
            "success": false,
            "message":"error in deletation"
        })
    }
}

//PATCH request----------------------------------------------------
async function updateProducts(req, res){
    try {
        const id = req.params.id;
        const {body} = req.body;
        await productModel.findByIdAndUpdate(id, {body});
        res.send({
            "success": true,
            "message":"updated successfully"
        })
    } catch (error) {
        res.send({
            "success": false,
            "message":"error"
        })
    }
}

module.exports = {addProducts,getProducts,deleteProducts,updateProducts}