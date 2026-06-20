require('dotenv').config();
const app = require('./src/app')
const connectDB = require('./src/db/db')
require('dotenv').config();


connectDB();//connect to database

app.listen(3000,() =>{//Start the server
    console.log('server is running ')
})