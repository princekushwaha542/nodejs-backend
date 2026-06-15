const app = require('./src/app')
const connectDB = require('./src/db/db')

connectDB();
//Start the server
app.listen(3000,() =>{
    console.log('server is running ')
})