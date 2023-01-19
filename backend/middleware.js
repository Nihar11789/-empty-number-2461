const jwt = require("jsonwebtoken");
const env = require("dotenv");
env.config()
const secret = process.env.SECRET

async function authMiddleware(req, res, next) {
    try {
     const token = req.headers.authorization
     if(token){
        let user = await jwt.verify(token, secret);
        next()
     } else {
        res.send({
            "success": false,
            "message": "Token not found"
        })
     }
    } catch (err) {
        res.send({
            "success": false,
            "message": err.message
        })
    }
}

module.exports = authMiddleware