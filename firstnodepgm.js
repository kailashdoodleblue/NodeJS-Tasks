var http = require('http');
var a = require('./gettime');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  res.write(a.getime()+"\n")
  res.end('Hello World!');
}).listen(8080); 

console.log("Hello")
console.log(a.getime())