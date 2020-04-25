const EventEmitter = require('events');
const http = require('http');

class Sales extends EventEmitter {
  constructor() {
    super();
  }
}

const myEmitter = new EventEmitter();

myEmitter.on('NewSale', () => {
  console.log('New sale happen...');
});

myEmitter.on('NewSale', () => {
  console.log('New custommer is Fe...');
});

myEmitter.on('NewSale', (stock) => {
  console.log(`Stock updated ${stock}...`);
});

// myEmitter.emit("NewSale", 9);

///

const server = http.createServer();

server.on('request', (req, res) => {
  let url = req.url;
  if (url === '/NewSale') {
    res.end('Requested received /NewSale emit');
    myEmitter.emit('NewSale', 9);
  } else {
    console.log('Request received');
    res.end('Requested received');
  }
});

server.on('request', (req, res) => {
  console.log('Another request received 👍');
});

server.on('close', (req, res) => {
  console.log('Close');
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Waiting for requests');
});
