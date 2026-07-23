const app = require('./src/app');
const  dotenv = require('dotenv');

app.listen(3000 , ()=>{
    console.log('server is started in port 3000')
})