const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(
    "mongodb+srv://leafie:ihroiaIAzulPIbvR@mern.ogliakt.mongodb.net/?retryWrites=true&w=majority&appName=MERN"
  )
  .then(() => {
    console.log("Connected to db!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("DB connection failed!");
  });
