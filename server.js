var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
	fs.readFile('index.html', function(err, data) {
	res.writeHead(200, {'Content-type': 'text/html'});
	res.write('Hello world!');
	res.write(data);
	res.write('Clinton\'s server');
});
}).listen(8080);