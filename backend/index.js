const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const Blog = require("./models/blog");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/blogs", async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/blogs/:id", async (req, res) => {
  try {
    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/blogs/:id", async (req, res) => {
  try {
    const deleted = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to db!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(() => {
    console.log("DB connection failed!");
  });
