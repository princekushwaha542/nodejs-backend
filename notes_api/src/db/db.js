  const mongoose = require("mongoose");

  async function connectDB(){
    await mongoose.connect("mongodb+srv://backend:8ltRtyaAFlBUBk7J@backend-hub.4tmcvqd.mongodb.net/hub")
    console.log("connected to database successfully");
  }
  module.exports = connectDB