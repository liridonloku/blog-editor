import React from "react";
import { Link } from "react-router-dom";
import { User } from "../App";

interface Props {
  user: null | User;
  logOut: Function;
}

const Header: React.FC<Props> = ({ user, logOut }) => {
  return (
    <header className="mb-3 position-sticky top-0">
      <nav className="navbar navbar-light bg-light navbar-expand-lg shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
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
              {user && (
                <li className="nav-item mb-1 mx-1">
                  <Link className="nav-link" aria-current="page" to="#">
                    {user.firstName} {user.lastName} | {user.email}
                  </Link>
                </li>
              )}
              <li className="nav-item mb-2 mx-1">
                <Link
                  className="nav-link btn btn-primary text-light"
                  aria-current="page"
                  to="/form"
                >
                  New Post
                </Link>
              </li>
              <li className="nav-item mb-2 mx-1">
                <Link
                  className="nav-link btn btn-danger text-light"
                  to="#"
                  onClick={() => logOut()}
                >
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
