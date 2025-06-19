import React from "react";
import BlogItem from "./BlogItem";

export default function BlogList({ blogs }) {
  return (
    <div className="blog-container">
      {blogs.length === 0 ? (
        <p>No blogs found</p>
      ) : (
        blogs.map((blog) => <BlogItem key={blog.id} blog={blog} />)
      )}
    </div>
  );
}
