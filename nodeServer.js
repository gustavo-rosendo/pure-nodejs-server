const http = require('http');

const SERVER_PORT = 3000;

// the http module has a createServer method
// takes 1 arg:
// 1. callback, which has 2 args: req, res
const server = http.createServer((req, res) => {
  console.log(req);
  
  // res = object who sends the response to the resquester
  // http message:
  // 1. start line - CHECK
  // 2. header
  // 3. body

  // writeHead takes 2 args:
  // 1. status code
  // 2. object for the mime-type
  res.writeHead(200, {'content-type':'text/html'});
  
  // write the body of our response
  res.write('<h1>Hello, world!</h1>');
  res.end();
});

// createServer returns an object with a listen method
server.listen(SERVER_PORT);