const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Are you ok, Annie?");
});

app.get("/api/user", (req, res) => {
  res.send({
    name: "Annie",
    cars: ["BMW", "Lexus"]
  });
});

const port = process.env.PORT || 3003;

app.listen(port);
