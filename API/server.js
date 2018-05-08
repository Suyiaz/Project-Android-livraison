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

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8383');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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
