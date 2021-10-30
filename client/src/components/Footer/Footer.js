import React from "react";
import "./Footer.css";
import { Container, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Nav className="d-flex justify-content-center">
          <NavItem>
            <NavLink href="" className="text">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" className="text">
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" className="text">
              Privacy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" className="text">
              Policy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" className="text">
              Terms & Conditions
            </NavLink>
          </NavItem>
        </Nav>
        <div className="copyright">
          © {new Date().getFullYear()} published by LYBL Tech
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
