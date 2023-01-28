import React from "react";

export default function Navbar(props) {
  return (
    <nav
      className="navbar bg-dark navbar-expand-lg text-center"
      data-bs-theme="dark"
     id="scrollspyHeading3"
    >
      <div className="container-fluid">
        <h3>
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
        </h3>
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
        <div
          className="collapse navbar-collapse ms-4"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item px-2">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#scrollspyHeading1">
                About
              </a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link" href="#scrollspyHeading2">
                Credits
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
