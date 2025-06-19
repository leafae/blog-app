import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddBlog from "./pages/AddBlog";

function App() {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
