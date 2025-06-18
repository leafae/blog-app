import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">ZH</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
