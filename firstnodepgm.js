var http = require('http');
var a = require('./gettime');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  // res.write(a.getime()+"\n")
  res.end(htmlReturn());
}).listen(8080); 

function htmlReturn(){
return `
<div>
<p>Hello how are you</p>
</div>`;
}
// console.log("Hello")
// console.log(a.getime())