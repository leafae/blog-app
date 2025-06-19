import React, { useEffect, useState } from "react";
import { getBlogs } from "../utils/api";
import BlogList from "../components/BlogList";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Blogs List</h1>
      {isLoading && <h2>Loading blogs...</h2>}
      <BlogList blogs={blogs} />
      {/* {blogs.length === 0 ? (
        <p>No blogs found</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))
      )} */}
    </div>
  );
}
