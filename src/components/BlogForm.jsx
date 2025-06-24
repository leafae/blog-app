import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BlogForm({
  initialData = { title: "", content: "" },
  onSubmit,
  formTitle,
  isEditMode = false,
}) {
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isEditMode) {
      setFormData(initialData);
    }
  }, [initialData]);

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
      setError("⚠︎ Title and Content cannot be blank");
      return;
    } else if (titleBlank) {
      setError("⚠︎ Title cannot be blank");
      return;
    } else if (contentBlank) {
      setError("⚠︎ Content cannot be blank");
      return;
    }
    setIsSubmitting(true);
    setError("");
    try {
      const data = await onSubmit(formData);
      console.log("New blog created: ", data);
      alert("Blog submitted");
      navigate(`/blogs/${data.id}`);
    } catch (err) {
      console.log(err);
      setError("⚠︎ Failed to submit blog. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="blog-form" onSubmit={handleSubmit}>
        <h1 className="blog-form-title">{formTitle}</h1>
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
        {isSubmitting && <p>Submitting blog...</p>}
      </form>
    </>
  );
}
