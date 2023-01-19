const express = require('express');
const { SigninUser, Loginuser, DecodeToken } = require('../controller/userController');

const Userrouter = express.Router();

Userrouter.post("/register",SigninUser)
Userrouter.post("/login",Loginuser)
Userrouter.post("/decode",DecodeToken)

module.exports = {Userrouter}