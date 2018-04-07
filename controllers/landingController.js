var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.render('landing_page');
});

app.get('/ens_success', function(req, res){
	res.render('ens_success');
});

module.exports = app;
