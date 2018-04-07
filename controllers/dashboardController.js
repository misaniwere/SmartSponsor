var express = require('express');
var app = express();

app.get('/dashboard', function(req, res) {
	res.render('dashboard');
});

module.exports = app;
