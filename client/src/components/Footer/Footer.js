import React from "react";
import "./Footer.css";
import { Container, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Nav className="d-flex justify-content-center">
          <NavItem>
            <Link to="/About">About Us</Link>
          </NavItem>
          <NavItem>
            <Link href="" className="textt">
              Contact
            </Link>
          </NavItem>
          <NavItem>
            <Link href="" className="textt">
              Privacy
            </Link>
          </NavItem>
          <NavItem>
            <Link href="" className="textt">
              Policy
            </Link>
          </NavItem>
          <NavItem>
            <Link href="" className="textt">
              Terms & Conditions
            </Link>
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
