const http = require('http');
const url = require('url')

const server = new http.Server(function(req, res){
  console.log(req.method, req.url);

  const urlParsed = url.parse(req.url, true);
  console.log(urlParsed);

  if(urlParsed.pathname === '/echo' && urlParsed.query.message) {
    res.end(urlParsed.query.message)
  } else {
    res.statusCode = 404;
    res.end('Page not found')
  }
})

server.listen(1337, '127.0.0.1');