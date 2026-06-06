const express = require('express');
const noteModel = require('./models/note.model');
const app = express(); //create a server using express

app.use(express.json())//middleware to parse json data from request body


app.post('/notes', async (req, res) => {
    const data = req.body;
    console.log(data)
   await noteModel.create({
    title : data.title,
    description : data.description
   })
   res.status(201).json({
    message: 'Note created successfully'
   })
    
})

app.get('/notes',async(req,res)=>{
    const notes = await noteModel.find();
    res.status(200).json({
        message: "notes recived",
        notes : notes
    })
})

// app.get('/notes',(req,res)=>{
//     console.log(req.body);
//     res.status(200).json({
        
//         message: "notes recived",
//         notes:notes
//     });
    
// })


// app.delete("/notes/:index",(req, res)=>{
//     const index = req.params.index;
//     delete notes[index];
//     res.status(200).json({
//         message: 'Note deleted seccessfully',
//     });
    
// })

// app.patch("/notes/:index",(req, res)=>{
//     const index = req.params.index;
//     const description = req.body.description;
//     notes[index].description = description;
//     res.status(200).json({
//         message: 'Note updated successfully',
//     })
// })


module.exports = app;