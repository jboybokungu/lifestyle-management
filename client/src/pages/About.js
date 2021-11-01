// Node Modules
import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

const About = (props) => {
  return (
    <div>
      {props.children}
      <Link className="" to="/dashboard"></Link>

      <ul className="linkd">
        <h2>The Creators</h2>
        <li>
          <a href="https://github.com/jboybokungu" className="text">
            Jonathan B
          </a>
        </li>
        <li>
          <a href="https://github.com/as98250" className="text">
            Ariell S{" "}
          </a>
        </li>

        <li>
          <a href="https://github.com/Lajaynees" className="text">
            Lajayness I{" "}
          </a>
        </li>
        <li>
          <a href="https://github.com/Mvint2647" className="text">
            Mel V{" "}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
