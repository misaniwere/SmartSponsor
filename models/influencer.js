var mongoose = require('mongoose');
var express = require('express');

//connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://sponsor:sponsor@ds237989.mlab.com:37989/smartsponsor');

var influencerSchema = mongoose.Schema({
 imageUrl: {
   type: String
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
 Date:{
   type:String,
   required:true
 },
 Tags: {
   type: Array
 },
 ContentUrls: {
   type:Array,
   required: true
 },
 Youtube: {
   type: String
 },
 Instagram: {
   type: String
 },
 Facebook: {
   type: String
 },
 Tumblr: {
   type: String
 },
 Twitter: {
   type: String
 }
});

module.exports = mongoose.model('Influencer', influencerSchema);
