import React from "react";
// import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";

const Header = (props) => {
  return (
    <div>
      {props.children}
      <Jumbotron>
        <h1 className="display-1 text-center">LIVE YOUR BEST LIFE</h1>
        <p className="lead text-center"> Grow into the best You. &#127793; </p>
      </Jumbotron>
    </div>
  );
};

export default Header;
