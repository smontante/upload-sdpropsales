require('../db/mongoose')
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const Upload = require('../models/upload')
const publicDirectioryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectioryPath))
app.use(express.json());

app.post('/upload', (req, res)=> {
    console.log('csv upload  :', req.body)
        const upload = new Upload(req.body);
        upload.save().then(()=> {
            res.status(201).send(upload);
        }).catch((e)=> {
            res.status(400).send(e)
        })
});

app.listen(port, ()=> {
    console.log('listening on port ', port)
});

