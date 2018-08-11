const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.end("Annie are you ok?");
});

server.listen(3003, "127.0.0.1");
