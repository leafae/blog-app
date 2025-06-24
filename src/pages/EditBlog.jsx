import React from "react";
import BlogForm from "../components/BlogForm";
import { useParams } from "react-router-dom";
import { updateBlog } from "../utils/api";

export default function EditBlog() {
  const { id } = useParams();

  const handleUpdate = async (updatedData) => {
    return await updateBlog(id, updatedData);
  };

  return (
    <div>
      <BlogForm formTitle={"Editing blog..."} onSubmit={handleUpdate} />
    </div>
  );
}
