import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className="mb-3 position-sticky top-0">
      <nav className="navbar navbar-light bg-light navbar-expand-lg shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Blog Editor
          </Link>
          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="#">
                  New Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Log In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
