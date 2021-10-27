import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
import Auth from '../../utils/auth';
// import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
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
      <Container>
        <Dropdown>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            HOME
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/dashboard">DashBoard</Dropdown.Item>
            <Dropdown.Item href="#/profile">Profile action</Dropdown.Item>
            <Dropdown.Item href="#/completed-goals">Goals</Dropdown.Item>
            <Dropdown.Item href="#/signout">Log-Out</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <button
          navbarToggle="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>

      </Container>



      <Link className="col-md-3 col-lg-2 me-0 px-3" to="/login">
        Log-In
      </Link>
      <Link className="col-md-3 col-lg-2 me-0 px-3" to="/signup">
        JOIN HERE
        Log-In
      </Link>
</>
      )

};

      export default Navbar;