import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBlog, getBlog } from "../utils/api";
import BlogItem from "../components/BlogItem";
import { RiEditBoxLine, RiDeleteBin5Line } from "react-icons/ri";

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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

  const handleDelete = async () => {
    const deleteConfirm = window.confirm("Delete this blog?");
    if (!deleteConfirm) return;

    try {
      const data = await deleteBlog(id);
      window.alert("Blog deleted!");
      navigate("/");
    } catch (err) {
      console.log(err);
      window.alert("Failed to delete blog.");
    }
  };

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
            <button className="blog-detail-delete" onClick={handleDelete}>
              <RiDeleteBin5Line />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
