const express = require("express");
const querystring = require("querystring");
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

app.get("/api/user/:id", (req, res) => {
  let id = req.params.id;
  res.send(`The user id is: ${id}`);
});

app.get("/api/car", (req, res) => {
  let brand = req.query.brand;
  let year = req.query.year;
  res.send({ brand, year });
});
const port = process.env.PORT || 3003;

app.listen(port);
