import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg MyNavBar ">
      <a className="navbar-brand" href="#">
        Ludwig Flores
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/About">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Contact">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Projects">
              Projects
            </a>
          </li>
        </ul>
        <br></br>
      </div>
    </nav>
  );
}
