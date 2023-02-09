const mongoose = require("mongoose");
require("dotenv").config() // not doing this will give undefined for every item that is stored in .env file
const uri = process.env.MONGO_URI
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
