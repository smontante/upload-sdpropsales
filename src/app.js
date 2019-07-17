require('../db/mongoose')
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const Typeform = require('../models/typeform')
const publicDirectioryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectioryPath))
app.use(express.json());

app.post('/typeform', (req, res)=> {
    console.log('uploaded file: ', req.body)
        const typeform = new Typeform(req.body);
        typeform.save().then(()=> {
            res.status(201).send(typeform);
        }).catch((e)=> {
            res.status(400).send(e)
        })
});

app.listen(port, ()=> {
    console.log('listening on port ', port)
});


//git remove -v to see what remotes to push too
// heroku push url - https://git.heroku.com/agentzip-upload.git
