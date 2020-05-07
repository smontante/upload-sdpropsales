const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/sellers-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

///Users/Admin/mongodb/bin/mongod  --dbpath=/Users/Admin/mongodb-data
