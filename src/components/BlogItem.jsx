import React from "react";
import "../styles/blog.css";

export default function BlogItem({ blog }) {
  return (
    <div key={blog.id} className="blog-card">
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
    </div>
  );
}
