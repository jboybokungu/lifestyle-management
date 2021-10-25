import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.css';


const Header = () => {
  return (
    <header>
      <div>
        <Link to="/">
          <h1>User List</h1>
        </Link>
      </div>
      <div>
        <h6>Simple App to View Users.</h6>
        <Navbar />
      </div>
    </header>
  );
  
};

export default Header;
