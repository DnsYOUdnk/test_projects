const EventEmitter = require("events").EventEmitter;

const server = new EventEmitter;
let count = 0;

server.on('request', function(request) {
  request.approved = true;
})

server.on('request', function(request) {
  request.counter = count++;
})

server.on('request', function(request) {
  console.log(request)
})

server.emit('request', {from: 'Клиент'});
server.emit('request', {from: 'Ещё Клиент'});

console.log(server.listeners('request'))