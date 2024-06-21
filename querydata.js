let http = require('http');
let url=require('url');

http.createServer (function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let querydata=url.parse(req.url,true).query;
    let data = querydata.name+querydata.age;
    res.end(data);
    // res.end();
}).listen(8000);