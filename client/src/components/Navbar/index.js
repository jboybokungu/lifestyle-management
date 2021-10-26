import React from 'react';
import { Link } from 'react-router-dom';
import "./index.css";
import Auth from '../../utils/auth';

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
  // If logged out show login controls
  return (
    // <>
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
        </Container>

      <Link to="/login">
        Login
      </Link>
      <Link to="/signup">
        Signup
      </Link>
    </> 
  )
}

export default Navbar
