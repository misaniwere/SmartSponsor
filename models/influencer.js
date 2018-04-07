var mongoose = require('mongoose');
var express = require('express');

var influencerSchema = mongoose.Schema({
 imageURL: {
   type: String,
   required: false
 },
 Name: {
   type: String,
   required: true
 },
 BountyDescription: {
   type: String,
   required: true
 },
 BountyPrice: {
   type: Number,
   required: true
 },
 BountyCryptoPrice:{
   type: Number,
   required: true
 },
 Tags: {
   type: Array,
   required: true
 },
 VideoUrls: {
   type:Array,
   required: true
 },
 SocialMedia: {
   type: Array,
   required: true
 }
});

module.exports = mongoose.model('Influencer', influencerSchema);


//connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sponsor:sponsor@ds237989.mlab.com:37989/smartsponsor');
