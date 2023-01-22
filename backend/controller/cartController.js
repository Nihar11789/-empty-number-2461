
const cartModel = require("../mediaModel/CartModel");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config()
const secret = process.env.SECRET


async function getCart(req,res){
    let {userid}=req.params;
    try{
        if(userid){
            const userCart=await cartModel.find({userid:userid})
            if(userCart.length>0){
                res.send({
                    success: true,
                    message:userCart
                })
            }else{
                res.status(404).send({
                    success: false,
                    message:"user not found"
                })
            }
        }else{
            res.status(400).send({success:false,message:"invalid userid"})
        }
    }catch(err){
        res.status(500).send({success:false,message:"something went wrong"});
    }
}


async function addCart(req,res){
    try{
        let cart=req.body;
        cart={...cart,quantity:1}
        if(cart.userid){
            console.log("hello")
            //    let usercart=await cartModel.find({id:cart.id,userid:cart.userid});    
            //     if(usercart.length>0){
            //         res.status(400).send({
            //             success: false,
            //             message:"Already Present in cart"
            //         })
            //     }else{
                    await cartModel.create(cart)
                res.send({
                    success: true,
                    message:"Added to cart"
                })
                // }
        }else{
            res.status(400).send({
                success: false,
                message:"Provide a valid userid"
            })
        }
    }catch(err){
        res.status(500).send({success:false,message:"something went wrong"});
    }
}

 async function updateCart(req,res){
    try{
        let {id}=req.params;
       
        if(id){
            let {quantity}=req.body;
            if(quantity){
                await cartModel.findByIdAndUpdate(id,{quantity:quantity})
                res.send({
                    sucess:true
                })
            }else{
                res.send({
                    sucess:false,
                    message:"quantity is required"
                })
            }
        }else{
            res.send({
                sucess:false,
                message:"Enter valid userid"
            })
        }

    }catch(err){
        res.status(500).send({success:false,message:"something went wrong"});
    }
}

 async function delCart(req,res){
    let {id}=req.params;
    try{
        let res=await cartModel.findOneAndRemove({_id:id});
        if(res){
            res.send({
                sucess:true,
                message:"Removed From cart"
            })
        }else{
            res.send({
                sucess:false,
                message:"Not Found"
            })
        }
    }catch(err){
        res.send({
            sucess:false,
            message:"Internal Server Error"
        })
    }
}

module.exports = {getCart,addCart,updateCart,delCart}
