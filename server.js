const express = require("express");
const app = express();

app.get("/api/users", (req, res) => {
  res.json([{ id: 1, username: "Annie " }, { id: 2, username: "Blair" }]);
});

app.get("/api/cars", (req, res) => {
  res.json([{ id: 1, brand: "Audi" }, { id: 2, brand: "BMW" }]);
});

const port = process.env.PORT || 3003;

app.listen(port);
