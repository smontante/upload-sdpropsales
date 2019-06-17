const path = require('path');
const express = require('express');
const publicDirectioryPath = path.join(__dirname, '../public');

const app = express(); 

app.use(express.static(publicDirectioryPath))

app.get('', (req, res) => { 
    res.send('Contact Verification')
})
 
app.listen(3000, () => {
    console.log('Application running on port 3000')
});

