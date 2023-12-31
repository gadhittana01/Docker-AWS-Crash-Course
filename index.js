const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("This is my express app");
});

app.get("/me", (req, res) => {
  res.send("Hi I am Laith");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    "status" : "ok"
  });
});

app.listen(8000, () => {
  console.log("listening");
});
