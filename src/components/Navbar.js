import React from "react";
import PropTypes from "prop-types";


export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-warning`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="">
                {props.aboutTxt}
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">
                {props.homeTxt}
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutTxt: PropTypes.string.isRequired,
};
