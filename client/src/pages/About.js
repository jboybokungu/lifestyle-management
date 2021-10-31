// Node Modules
import React from "react";
import { Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";
import "./about.css";

const About = (props) => {
  return (
    <div>
      {props.children}
      <Jumbotron>
      <h1>The Creators</h1>
        <Link className="" to="/dashboard"></Link>
        
        <ul className="linkd">
          <li>
            <a href= "https://github.com/jboybokungu" className="text">Jonathan B</a>
          </li>
          <li>
            <a href="https://github.com/as98250" className="text">Ariell S </a>
          </li>

          <li>
            <a href="https://github.com/Lajaynees" className="text">Lajayness I </a>
          </li>
          <li>
            <a href="https://github.com/Mvint2647" className="text">Mel V </a>
          </li>
        </ul>
      </Jumbotron>
    </div>
  );
};

export default About;
