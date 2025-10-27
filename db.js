require("dotenv").config();
const mongoose = require("mongoose")

const connectMongo = async () => {

  try {
    const mongoURI = process.env.MONGOURI; //get mongouri from .env
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error.message);
  }
};

module.exports = connectMongo;