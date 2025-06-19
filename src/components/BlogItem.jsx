import React from "react";

export default function BlogItem({ blog }) {
  return (
    <div key={blog.id}>
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
    </div>
  );
}
