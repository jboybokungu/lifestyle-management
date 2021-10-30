import React from "react";
import "./Header.css";
import { Jumbotron } from "reactstrap";

const Header = (props) => {
  return (
    <div>
      {props.children}
      <Jumbotron className="headerr">
        <h1 className="display-1 text-center">LIVE YOUR BEST LIFE</h1>
        <p className="text-center lead"> Grow into the best You. &#127793; </p>
      </Jumbotron>
    </div>
  );
};

export default Header;
