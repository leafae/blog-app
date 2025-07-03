const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/blogs", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
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
