const express = require('express');

const app = express(); //create a server using express
// app.get('/',(req,res)=>{
//     res.send('Hello world')
// })
// app.get('/about',(req,res)=>{
//     res.send('About page')
// })
const notes=[]

app.use(express.json()) //middleware to parse json data from request body
app.post('/notes',(req,res)=>{
    console.log(req.body);
    notes.push(req.body);
    res.status(201).json({
        message:'Note created successfully',
    });
    
})


app.get('/notes',(req,res)=>{
    res.status(200).json({
        message: "notes recived",
        notes:notes
    });
    
})


app.delete("/notes/:index",(req, res)=>{
    const index = req.params.index;
    delete notes[index];
    res.status(200).json({
        message: 'Note deleted seccessfully',
    });
    
})
module.exports = app;