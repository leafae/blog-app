import React, { useEffect, useState } from "react";
import BlogForm from "../components/BlogForm";
import { useParams } from "react-router-dom";
import { getBlog, updateBlog } from "../utils/api";

export default function EditBlog() {
  const { id } = useParams();
  const [initialData, setInitialData] = useState({ title: "", content: "" });

  const handleUpdate = async (updatedData) => {
    return await updateBlog(id, updatedData);
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blog = await getBlog(id);
        setInitialData({ title: blog.title, content: blog.content });
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlog();
  }, []);

  return (
    <div>
      <BlogForm
        formTitle={`Editing Blog - ID: ${id}`}
        onSubmit={handleUpdate}
        initialData={initialData}
        isEditMode={true}
      />
    </div>
  );
}
