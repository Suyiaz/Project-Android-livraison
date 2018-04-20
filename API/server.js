const express = require('express');
const bodyParser = require('body-parser');
const dbconf = require('./config/db');
const mongoose = require('mongoose');

const hostname = 'localhost';
const port = 3000;

mongoose.Promise = global.Promise;

app = express();
require('./routes')(app);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//connect to mongo
mongoose.connect(dbconf.url)
    .then(()=>{
        console.log('Successfully connected to database');
    }).catch(err => {
        console.log('Could not connect to databse. Exiting...');
        process.exit();
    });


app.listen(port,function(){
    console.log("Server running on http://"+hostname+":"+port)
});

//test branche devthomas avec master