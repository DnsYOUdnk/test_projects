const http = require('http');

const server = http.Server();

server.listen(1337, '127.0.0.1');

let counter = 0;

let emit = server.emit;
server.emit = function(event, /*arg1, arg2 ... */) {
  console.log(event);
  emit.apply(server, arguments)
}

server.on('request', function(req, res) {
  res.end('Hello world!' + counter++)
})