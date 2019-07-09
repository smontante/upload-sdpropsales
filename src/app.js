require('../db/mongoose')
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const California = require('../models/california')
const Florida = require('../models/florida')
const Nevada = require('../models/nevada')
const publicDirectioryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectioryPath))
app.use(express.json());

//POST CALIFORNIA
// app.post('/california', (req, res)=> {
//     console.log('csv upload  :', req.body)
//         const california = new California(req.body);
//         california.save().then(()=> {
//             res.status(201).send(california);
//         }).catch((e)=> {
//             res.status(400).send(e)
//         })
// });

//POST FLORIDA
// app.post('/florida', (req, res)=> {
//     console.log('florida upload  :', req.body)
//         const florida = new Florida(req.body);
//         florida.save().then(()=> {
//             res.status(201).send(florida);
//         }).catch((e)=> {
//             res.status(400).send(e)
//         })
// });

//POST NEVADA
app.post('/california_buyer', (req, res)=> {
    console.log('nevada upload  :', req.body)
        const california_buyer = new California(req.body);
        california_buyer.save().then(()=> {
            res.status(201).send(california_buyer);
        }).catch((e)=> {
            res.status(400).send(e)
        })
});

app.listen(port, ()=> {
    console.log('listening on port ', port)
});


//git remove -v to see what remotes to push too
// heroku push url - https://git.heroku.com/agentzip-upload.git
