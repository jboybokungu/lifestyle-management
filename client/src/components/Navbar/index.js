import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Auth from "../../utils/auth";

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const renderConditional = () => {
    if (Auth.loggedIn()) {
      return (
        <>
          <li className="nav-item">
            <Link className="nav-link" to="/me">
              Profile <span className=""></span>
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item" onClick={logout}>
            <span className="nav-link">Logout</span>
          </li>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand text" to="/me">
          L.Y.B.L
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">{renderConditional()}</ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
