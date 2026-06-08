const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://backend:8ltRtyaAFlBUBk7J@backend-hub.4tmcvqd.mongodb.net/project-1')
    console.log('connected to database');
}

module.exports = connectDB;