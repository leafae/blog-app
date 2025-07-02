import React, { useEffect, useState } from "react";
import { getBlogs } from "../utils/api";
import BlogList from "../components/BlogList";
import {
  HiOutlineSortAscending,
  HiOutlineSortDescending,
} from "react-icons/hi";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDescendingOrder, setIsDescendingOrder] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const toggleSortOrder = () => {
    setIsDescendingOrder((prev) => !prev);
  };

  const sortedBlogs = [...blogs].sort((a, b) => {
    return isDescendingOrder ? b.id - a.id : a.id - b.id;
  });

  const filteredBlogs = sortedBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>
        Blogs List
        <span onClick={toggleSortOrder} className="toggle-sort-btn">
          {isDescendingOrder ? (
            <HiOutlineSortDescending />
          ) : (
            <HiOutlineSortAscending />
          )}
        </span>
      </h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />

      {isLoading ? (
        <h2>Loading blogs...</h2>
      ) : (
        <BlogList blogs={filteredBlogs} />
      )}
    </div>
  );
}
