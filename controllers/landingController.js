var express = require('express');
var app = express();
var Influencer = require('../models/influencer');

app.get('/', function(req, res) {
	res.render('landing_page');
});

app.get('/ens_success', function(req, res){
	res.render('ens_success');
});

app.get('/confirmation', function(req, res){
	Influencer.findOne({
      '_id': req.query.name
  },function(err, results){
    console.log("query name" + req.query.name)
   if (err){
     var error = "couldn't load feed";
     res.render('confirmation', {error: error});
		 console.log(error);
   }
   else{
     res.render('confirmation', {data: results});
		 console.log(results);
   }
   });
});

module.exports = app;
