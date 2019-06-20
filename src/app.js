const path = require('path');
const express = require('express');
const publicDirectioryPath = path.join(__dirname, '../public');

const app = express(); 
const port = process.env.PORT || 3000;

app.use(express.static(publicDirectioryPath))

app.get('', (req, res) => { 
    res.send('Contact Verification')
})
 
app.listen(port, () => {
    console.log('Application running on port: ', port)
});


