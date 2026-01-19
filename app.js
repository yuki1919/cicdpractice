const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Cloud Computing Class! This is VERSION 2.0 - Updated on ' + new Date().toISOString().split('T')[0]);
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});