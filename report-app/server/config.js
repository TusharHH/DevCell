const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Response = require('./utils/ResponseHandler');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connection established!!");
        
    } catch (error) {
        console.log(Response("error", "Error connecting to Mongo!!"));
        throw error;
    }
}

module.exports = connectDB;
