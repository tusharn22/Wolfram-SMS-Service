var http = require('http');
var request = require('request');
var express = require('express');
var twilio = require('twilio')("AC87b33b99abdbf60842b57ebcac3b0a73", "9a106c6c08499c61fb2c7b4a78bfe593"); //API credentials
var bodyParser = require("body-parser");
var url = "http://api.wolframalpha.com/v1/simple?appid=";
var APIkey = "VQX7TK-E688JR2JKH";
var app = express();
app.use(bodyParser.urlencoded({ extended: true })); 

//use ngrok to generate link to be placed in twilio's app dashboard, or host on public server 
//post request to send sms to twilio owned number 
app.post("/message", function (req, res) {
  console.log(req.body.Body + "\n" + req.body.From + "\n");
  var twilio = require('twilio');
  var twiml = new twilio.TwimlResponse();
  url = url + encodeURIComponent(APIkey) + "&i=" + encodeURIComponent(req.body.Body);
  console.log(url);
  request(url, function(error,response,body){
	  if(error){
		  console.log(error);
		  twilio.message("Query not valid");
	  }
	  else{
		  twiml.message(function(){
			this.body('Here is your query');
			this.media(url);
	 });
	  }
	  res.writeHead(200, {'Content-Type': 'text/xml'});
	  res.end(twiml.toString());
  }); 
});

app.get("/", function(req,response){
  console.log("Hello");
});
 
http.createServer(app).listen(8080, function () {
  console.log("Express server listening on port 8080");
});