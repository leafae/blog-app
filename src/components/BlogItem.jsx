import React from "react";
import "../styles/blog.css";

export default function BlogItem({ blog }) {
  return (
    <div className="blog-card">
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
    </div>
  );
}
