const mongoose = require("mongoose");
const env = require("dotenv");
env.config()


async function createconnection(){
    try {
        mongoose.connect(`mongodb+srv://nihar:${process.env.PASSWORD}@cluster0.8wm4fmy.mongodb.net/chiffon?retryWrites=true&w=majority`)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}
mongoose.set('strictQuery', true);
module.exports = createconnection;