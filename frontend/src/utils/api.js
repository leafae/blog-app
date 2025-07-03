import axios from "axios";

const URL = "https://685266170594059b23cd5669.mockapi.io/api/blog";

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
