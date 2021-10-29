import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
import Auth from '../../utils/auth';
// import Button from 'react-bootstrap/Button';
// import BootstrapNavbar from 'react-bootstrap/Navbar';

const Navbar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  if (Auth.loggedIn()) {
    return (
      <>
        <Link to="/me">
          {Auth.getProfile().data.username}'s profile
        </Link>
        <button onClick={logout}>
          Logout
        </button>
      </>
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">L.Y.B.L</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
          <Link className="dropdown-item" to="/me/users/:id">Profile</Link>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active">
            <Link className="nav-link" to="/dashboard">Dashboard
              </Link>
            </li>
            <Link className="nav-link" to="/login/signup">Home
              </Link>
            <li className="nav-item">
              <Link className="nav-link" to="/">Log-Out</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/me/users/:id">Profile <span className="navbar-toggler-icon"></span></Link>
              
              



            </li>
          </ul>

        </div>
      </nav>
    </>
  );
};
export default Navbar;