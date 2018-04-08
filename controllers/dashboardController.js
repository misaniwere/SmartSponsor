var express = require('express');
var app = express();
var Influencer = require('../models/influencer');
var bcrypt = require('bcrypt');

app.get('/dashboard', function(req, res) {

	Influencer.find(function(err, results){
   if (err){
     var error = "couldn't load feed";
     res.render('dashboard', {error: error});
		 console.log(error);
   }
   else{
     res.render('dashboard', {data: results});
		 console.log(results);
   }
   });
});

// app.get('/sample', function(req, res){
// 	res.render('sample');
// })

module.exports = app;
