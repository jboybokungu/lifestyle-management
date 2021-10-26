import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const Header = () => {
  return (
    <header>
      <div id="headercolor">
        <Link to="/">
          <h1>Personal Dashboard</h1>
        </Link>
      </div>
    </header>
  );
  
};

export default Header;
