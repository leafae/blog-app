import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBlog } from "../utils/api";
import BlogItem from "../components/BlogItem";
import { RiEditBoxLine, RiDeleteBin5Line } from "react-icons/ri";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getBlog(id);
        setBlog(data);
      } catch (err) {
        console.log("Error fetching blog", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h1>Blog Detail</h1>
      {isLoading ? (
        <h2>Loading blogs...</h2>
      ) : !blog ? (
        <h2>Blog not found</h2>
      ) : (
        <>
          <BlogItem blog={blog} />
          <div className="blog-detail-btns">
            <button className="blog-detail-edit">
              <RiEditBoxLine />
            </button>
            <button className="blog-detail-delete">
              <RiDeleteBin5Line />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
