const UserModel = require("../mediaModel/userModel");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config()
const secret = process.env.SECRET

//POST-REQUEST FOR SIGNIN USER--------------------------
async function SigninUser(req, res){
    try {
     const {email,password,name,gender} = req.body;
     const user = await UserModel.find({email});
     if(user.length==0){
        await UserModel.create(req.body);
         res.send({
             "success": true,
             "message": "User created successfully"
         })
     } else {
         res.send({
             "success": false,
             "message": "User already exists"
         })
     }
    } catch (error) {
     if(error.message){
         res.status(400).send({
             "success": false,
             "message": error.message
         })
     } else {
         res.status(500).send({
             "success": false,
             "message":"internal server error occurred"
         })
     }
    }
       
 }

 //LOGIN-POST REQUEST---------------------------------
 async function Loginuser(req, res){
    try {
        const {email,password} = req.body;
        const login = await UserModel.findOne({email,password});
        if(login == null){
            res.status(403).send({
                "success": false,
                "message": "Signin first"
            })
        } else {
                const payload = {
                    id: login.id,
                    username: login.username,

                }
                const data = await jwt.sign(payload, secret)
                res.send({"success":true, "message": data});
           
        }

    } catch (error) {
        console.log(error)
        if(error){
            res.send({
                "success": false,
                "message":"wrong credentials"
            })
        }
    }
}

//DECODING THE TOKEN
async function DecodeToken(req, res){
   
    try {
        const token = req.body.token;
        const decoded = await jwt.verify(token, secret);
        res.send({"success":true, "message": decoded});
    } catch (error) {
        res.send({"success": false, "message":"cannot be decoded"})
    }
}

module.exports = {SigninUser,Loginuser,DecodeToken}
