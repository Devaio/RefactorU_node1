
var fs = require('fs');
var http = require('http');
var server = http.createServer(function (req, res) {

// var dataFile = fs.readFileSync(__dirname + '/data.txt')



	fs.readFile(__dirname + '/data.txt', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
  		res.end(data);
	}); 

		// res.writeHead(200, {'Content-Type': 'text/html'});
  		// res.end(dataFile);
})

server.listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');