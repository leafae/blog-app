import React, { useState } from "react";
import { createBlog } from "../utils/api";

export default function BlogForm() {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((currData) => {
      return {
        ...currData,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleReset = () => {
    setFormData({ title: "", content: "" });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const titleBlank = !formData.title.trim();
    const contentBlank = !formData.content.trim();
    if (titleBlank && contentBlank) {
      setError("⚠︎ Title and Content cannot be blanked");
      return;
    } else if (titleBlank) {
      setError("⚠︎ Title cannot be blanked");
      return;
    } else if (contentBlank) {
      setError("⚠︎ Content cannot be blanked");
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
      const data = await createBlog(formData);
      console.log("New blog created: ", data);
      handleReset();
      alert("New blog added");
    } catch (err) {
      console.log(err);
      setError("⚠︎ Failed to create blog. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="blog-form" onSubmit={handleSubmit}>
        <h1 className="blog-form-title">Add a new Blog!</h1>
        <div className="blog-form-row">
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="blog-form-row">
          <label>Content: </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
        </div>
        <div className="blog-form-btn-row">
          <button type="button" onClick={handleReset} disabled={isSubmitting}>
            Reset
          </button>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </div>
        {error && <div className="blog-form-error">{error}</div>}
        {isSubmitting && <p>Creating new blog...</p>}
      </form>
    </>
  );
}
