var http = require('http');


http.createServer(function (req, res) {
  
  res.write("annen evde mig");
  res.end();
  
}).listen(8080);