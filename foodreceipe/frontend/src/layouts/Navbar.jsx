import React from "react";
import { Link, Navigate } from "react-router-dom";
import { SigninPopover } from "../components/SigninPopover";
import logo from "../Image/Tastelogo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      window.location.href = `/search?q=${searchQuery}`;
    }
    navigate("/search");
  };
  return (
    <nav
      className="navbar navbar-expand-lg p-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="container-fluid">
        {/* Logo on the left */}
        <Link className="navbar-brand ms-4" to="/">
          <img src={logo} alt="" style={{ width: "310px", height: "100px" }} />
        </Link>

        {/* Toggler button for smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar items in the middle */}
          <ul
            className="navbar-nav mb-lg-0 mx-auto"
            style={{ display: "flex", alignItems: "center" }}
          >
            <li className="nav-item ms-5" style={{ marginRight: "100px" }}>
              <Link
                className="nav-link active fw-semibold"
                aria-current="page"
                to="/"
                style={{ fontSize: "large" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item pt-3" style={{ marginLeft: "100px" }}>
              <a className="nav-link" href="#">
                <SigninPopover />
              </a>
            </li>
          </ul>
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2 mb-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button className="btn btn-outline-success mb-2 me-4" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="22"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
