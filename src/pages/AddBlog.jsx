import React from "react";
import BlogForm from "../components/BlogForm";
import { createBlog } from "../utils/api";

export default function AddBlog() {
  const handleCreate = async (data) => {
    return await createBlog(data);
  };

  return (
    <div>
      <BlogForm onSubmit={handleCreate} formTitle={"Add a new blog!"} />
    </div>
  );
}
