import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <a className="navbar-brand d-block d-sm-none" href="#g">
          <img
            src={Logo}
            alt="logo"
            style={{ width: "45px", height: "45px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#togglerNavbar"
          aria-controls="togglerNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="togglerNavbar">
          <a className="navbar-brand d-none d-sm-block" href="#g">
            <img
              src={Logo}
              alt="logo"
              style={{ width: "45px", height: "45px" }}
            />
          </a>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
