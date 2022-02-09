// http is native to NodeJS, we just need to ask for it
const http = require('http');
// fs = file system module which is built into NodeJS
// fs gives Node access to THIS computer's file system
const fs = require('fs');

const SERVER_PORT = 3000;

// the http module has a createServer method
// takes 1 arg:
// 1. callback, which has 2 args: req, res
const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === '/') {
    // res = object who sends the response to the resquester
    // http message:
    // 1. start line - CHECK
    // 2. header
    // 3. body

    // writeHead takes 2 args:
    // 1. status code
    // 2. object for the mime-type
    res.writeHead(200, {'content-type':'text/html'});
    
    // using sync method here just to avoid handling async issues for the sake of this sample
    const homePageHTML = fs.readFileSync('node.html');

    // write the body of our response
    //res.write('<h1>This is the home page!</h1>');
    res.write(homePageHTML);
  }
  else if (req.url === '/css/styles.css') {
    res.writeHead(200, {'content-type':'text/css'});
    const styles = fs.readFileSync('css/styles.css');
    res.write(styles);
  }
  else if (req.url === '/assets/Node-logo.png') {
    res.writeHead(200, {'content-type':'image/png'});
    const image = fs.readFileSync('assets/Node-logo.png');
    res.write(image);
  }
  else {
    res.writeHead(404, {'content-type':'text/html'});
    res.write('<h4 style=\'color: red\'>Sorry, page not found!</h4>');
  }

  // close the http connection
  res.end();
});

// createServer returns an object with a listen method
server.listen(SERVER_PORT);