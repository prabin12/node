var http = require('http');
var server = http.createServer(function(req, res){
	res.end('Hello Nirvik');
});
console.log('Node will respont on localhost:3000');
server.listen(3000);