import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//here below is the react function based component (shortcut - rfc)
export default function Navbar(props) {
  return (
    <div>
      <nav
        className={`navbar navbar-${props.mode === "light" ? "dark" : "light"} navbar-expand-lg bg-${props.mode === "light" ? "dark" : "light"}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success mx-2" type="submit">
                Search
              </button>
              <span className = 'colorbtn mx-1 my-2' id = "red" onClick={()=> props.bgcolor('#d91f1f')}></span>
              <span className = 'colorbtn mx-1 my-2' id = "yellow" onClick={()=> props.bgcolor('#f5ed0a')}></span>
              <span className = 'colorbtn mx-1 my-2' id = "green" onClick={()=> props.bgcolor('#53cf10')}></span>
              <span className = 'colorbtn mx-1 my-2' id = "blue" onClick={()=> props.bgcolor('#0b1ae7')}></span>
            </form>
            <div className={`form-check form-switch text-${props.mode} mx-3`}>
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "defaultitle",
};
