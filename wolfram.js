var http = require('http');
var express = require('express');
var request = require('request');
var fs = require('fs');
var twilio = require('twilio')("AC87b33b99abdbf60842b57ebcac3b0a73", "9a106c6c08499c61fb2c7b4a78bfe593");
var query = "http://api.wolframalpha.com/v1/simple?appid=";
var APIkey = "VQX7TK-E688JR2JKH";


var downloadImage;
var app = express();
var d = new Date();
module.exports ={};

//accessing query via wolfram api 

/*request('https://api.wolframalpha.com/v1/simple?i=Who+is+the+prime+minister+of+India%3F&appid=DEMO')
    .pipe(downloadImage = fs.createWriteStream('alpha/test.gif')); //storing file in appropiate dir

downloadImage.on('close', function() {
  console.log('file done');
});

downloadImage.on('error', function(err) {
  console.error('file had error!');
  console.log(err);
});

http.createServer(app).listen(8080, function () {
  console.log("Express server listening on port 8080");
});*/