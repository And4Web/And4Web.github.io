import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
// import logo from "../../images/logo.jpeg";

export default function Header() {
  return (
    <header>
      <div className="logo"></div>

      <nav className="navbar">
        <Link to="#Category">Category</Link>
        <Link to="#faqs">FAQs</Link>
        <Link to="/mycart">My Cart</Link>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </nav>
    </header>
  );
}
