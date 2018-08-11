const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/html" });
    let HTML = fs.readFileSync("./index.html");
    res.end(HTML);
  } else if (req.url === "/api/user") {
    res.writeHead(200, { "Content-type": "application/json" });
    const json = JSON.stringify({
      name: "Annie",
      cars: ["BMW", "Lexus"]
    });

    res.end(json);
  } else {
    res.writeHead(400);
    res.end();
  }
});

server.listen(3003, "127.0.0.1");
