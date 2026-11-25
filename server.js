
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my backend!");
});

app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Headphones", price: 999 },
    { id: 2, name: "Keyboard", price: 1499 }
  ]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
