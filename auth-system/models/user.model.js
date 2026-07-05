const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:'string',
    email:'string',
    password:'string'
})

const userModel = mongoose.model('user',userSchema);


module.exports = userModel;