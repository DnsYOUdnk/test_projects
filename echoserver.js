const http = require('http');
const url = require('url')

const server = new http.Server(function(req, res){
  console.log(req.headers, req.url);



  console.log(req.method, req.url);

  const urlParsed = url.parse(req.url, true);
  console.log(urlParsed);

  if(urlParsed.pathname === '/echo' && urlParsed.query.message) {
    // res.statusCode = 200;
    res.setHeader('Cache-control', 'no-cache, no-store, must-revalidate' )
    res.end(urlParsed.query.message)
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
})

server.listen(1337);