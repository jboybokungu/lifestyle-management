
/*eslint-disable*/
import React from "react";
import "./index.css";
import { Container, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Nav >
          <NavItem >
            <NavLink href="">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Contact</NavLink>
          </NavItem>
          
          <NavItem>
            <NavLink href="">Privacy</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Policy</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">Terms & Conditions</NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} published by LYBL Tech
          {/* <a href="" target="_blank"></a> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
