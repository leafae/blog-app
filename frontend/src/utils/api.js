import axios from "axios";

const URL = "https://blog-app-efw5.onrender.com/api/blogs";

export const getBlogs = async () => {
  const res = await axios.get(URL);
  return res.data;
};

export const getBlog = async (id) => {
  const res = await axios.get(`${URL}/${id}`);
  return res.data;
};

export const createBlog = async (newBlog) => {
  const res = await axios.post(URL, newBlog);
  return res.data;
};

export const updateBlog = async (id, updatedBlog) => {
  const res = await axios.put(`${URL}/${id}`, updatedBlog);
  return res.data;
};

export const deleteBlog = async (id) => {
  const res = await axios.delete(`${URL}/${id}`);
  return res.data;
};
