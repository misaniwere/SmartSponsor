var express = require('express');
var app = express();
var Influencer = require('../models/influencer');

app.get('/influencerPage', function(req, res) {

  Influencer.findOne({
      '_id': req.query.name
  },function(err, results){
    console.log("query name" + req.query.name)
   if (err){
     var error = "couldn't load feed";
     res.render('influencerPage', {error: error});
		 console.log(error);
   }
   else{
     res.render('influencerPage', {data: results});
		 console.log(results);
   }
   });
});


module.exports = app;
