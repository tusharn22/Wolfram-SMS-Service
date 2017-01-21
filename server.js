var express = require('express');
var path = require('path');
var bodyParser = require('body-parser'); //allows the use of req.body in POST request
var app = express();
var server = require('http').createServer(app); //creates an HTTP server instance

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); //sets all static file calls to folder

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (request, response) {
  response.send('hello world')
})

app.get('/fun', function (request, response) {
  response.sendfile("public/fun.html");
})

app.post('/fun', function (request, response) {
  console.dir(request.body);
  response.json({
    "status":"Good"
  })
})
// http.createServer(function (request, response) {
//    response.end(content);
// }).listen(8080, 'localhost');
// console.log('Server running at http://localhost:8080/.');




//-------------------------HTTP Server Config-----------------------------//
server.listen(8080); //Port to listen on
server.on('listening', onListening);

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}
