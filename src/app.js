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
    const note = req.body;
    notes.push(note);
    res.status(201).json({
        message:'Note created successfully',
        notes:note
    });
    
})


app.get('/notes',(req,res)=>{
    console.log(req.body);
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

app.patch("/notes/:index",(req, res)=>{
    const index = req.params.index;
    const description = req.body.description;
    notes[index].description = description;
    res.status(200).json({
        message: 'Note updated successfully',
    })
})

module.exports = app;