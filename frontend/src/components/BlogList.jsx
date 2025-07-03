import React from "react";
import BlogItem from "./BlogItem";
import { Link } from "react-router-dom";

export default function BlogList({ blogs }) {
  return (
    <div className="blog-container">
      {blogs.length === 0 ? (
        <p>No blogs found</p>
      ) : (
        blogs.map((blog) => (
          <Link
            key={blog.id}
            className="blog-card-link"
            to={`/blogs/${blog.id}`}
          >
            <BlogItem blog={blog} />
          </Link>
        ))
      )}
    </div>
  );
}
