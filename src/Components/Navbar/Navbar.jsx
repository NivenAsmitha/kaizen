import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const isLoggedIn = false; // Replace this with real auth logic

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow-sm sticky-top">
      <div className="container-fluid">
        {/* Brand */}
        <a className="navbar-brand fw-bold fs-3" href="/">
          KAIZEN
        </a>
        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#blog">
                Blog
              </a>
            </li>
          </ul>
          {/* Search + Profile/Login */}
          <form className="d-flex me-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          {/* Profile/Login Section */}
          {isLoggedIn ? (
            <div className="d-flex align-items-center profile-section text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                className="bi bi-person-circle me-2"
                viewBox="0 0 16 16"
              >
                <path d="M13.468 12.37C12.758 11.226 11.444 10.5 10 10.5c-1.443 0-2.757.726-3.467 1.87A6.987 6.987 0 0 0 1 8a7 7 0 1 0 14 0 6.987 6.987 0 0 0-1.532 4.37zM8 15a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
                <path d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
              </svg>
              <span>Profile</span>
            </div>
          ) : (
            <a className="btn btn-outline-light fw-bold" href="/login">
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
/* To make all navbar text bold, add this to Navbar.css: */
/*
.navbar, .navbar * {
  font-weight: bold !important;
}
*/
