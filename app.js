// HTTP modules
const http = require("http");

// req - requests received from the web browser
// res - responses that is sent back
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the home page");
  }

  if (req.url === "/about") {
    res.end("Welcome to the about page");
  }

  res.end(`
  <h1>Oops... Page not found!</h1>
  <a href="/">Back home</a>
  `);
});

server.listen(5000);
