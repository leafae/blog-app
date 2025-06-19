import React, { useState } from "react";

export default function BlogForm() {
  const [formData, setFormData] = useState({});

  return (
    <>
      <form className="blog-form">
        <h1 className="blog-form-title">Add a new Blog!</h1>
        <div className="blog-form-row">
          <label>Title: </label>
          <input />
        </div>
        <div className="blog-form-row">
          <label>Content: </label>
          <textarea />
        </div>
        <div className="blog-form-btn-row">
          <button>Reset</button>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
}
