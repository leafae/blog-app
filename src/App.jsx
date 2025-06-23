import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddBlog from "./pages/AddBlog";
import BlogDetail from "./pages/BlogDetail";
import EditBlog from "./pages/EditBlog";

function App() {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/add" element={<AddBlog />} />
          <Route path="/blogs/edit/:id" element={<EditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
