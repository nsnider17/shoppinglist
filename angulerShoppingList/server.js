var express = require('express'); // Imports express into file, saves it to the express variable
var app = express(); // makes a new express object
var http = require('http').Server(app); // Basically says this is an http server and use that

// Allows you to use your own public folder on the server
// Tell node where to find static files 
app.use(express.static(__dirname));

// When something asks for the base directory, return our index.html file
app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

// Listen for events on this port (in our case 3000)
//Run on a local port
http.listen(process.env.PORT || 3000, function(){
	console.log('Listening on *:3000');
});