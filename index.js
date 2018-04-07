const express = require('express');
const app = express();
const fs = require('fs');
var bodyParser = require('body-parser');

'use strict';




app.set('view engine', 'ejs');
app.use(express.static(__dirname));


app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

var landing_page = require('./controllers/landingController');
app.use('/', landing_page);

//const ip = require("ip");// ip.address()
app.use('/src', express.static('src'));
app.use('/abi', express.static('truffleWorkspace/build/contracts'));

//Host the app
app.listen(3042, () => console.log('Example app listening on port 3042!'));
