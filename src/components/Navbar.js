import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaDribbble, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import "../App.css";
import logo from "../img/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      {/* Leva strana - Logo */}
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
      </div>

      {/* Hamburger dugme */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Centar - Navigacija */}
      <div className={`navbar-center ${isOpen ? "show" : ""}`}>
        <Link
          to="/"
          className={`transition ${isActive("/") ? "nav-link-main" : "nav-link-second"}`}
          onClick={() => setIsOpen(false)}
        >
          HOME
        </Link>

        <Link
          to="/MyWork"
          className={`transition ${isActive("/MyWork") ? "nav-link-main" : "nav-link-second"}`}
          onClick={() => setIsOpen(false)}
        >
          MY WORK
        </Link>
      </div>

      {/* Desna strana - Društvene mreže */}
      <div className={`navbar-right ${isOpen ? "show" : ""}`}>
        <a
          href="https://www.linkedin.com/in/ilija-vukovljak/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-icon"
        >
          <FaLinkedin />
        </a>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="nav-icon">
          <FaDribbble />
        </a>
        <a href="https://github.com/vukovljak" target="_blank" rel="noopener noreferrer" className="nav-icon">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}
