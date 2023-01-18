const mongoose = require('mongoose');

const schema = new mongoose.Schema({
      name:{
        type : String,
        required: true,
      },
      email:{
        type : String,
        required: true,
      },
      gender:{
        type : String,
        required: true,
      },
      password:{
        type : String,
        required: true,
      }
})

const UserModel = mongoose.model('users', schema);
module.exports = UserModel; 