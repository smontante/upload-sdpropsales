require('../db/mongoose')
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const Sellers = require('../models/sellers');
const publicDirectioryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectioryPath))
app.use(express.json());

app.post('/sellers', (req, res)=> {
    console.log('uploaded file: ', req.body)
        const sellers = new Sellers(req.body);
        sellers.save().then(()=> {
            res.status(201).send(sellers);
        }).catch((e)=> {
            res.status(400).send(e)
        })
});

app.listen(port, ()=> {
    console.log('listening on port ', port)
});


