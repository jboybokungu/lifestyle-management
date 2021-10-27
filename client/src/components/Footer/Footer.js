import React from "react";
import "./Footer.css";
import { Container, Nav, NavItem, NavLink } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Nav className="d-flex justify-content-center">
          <NavItem>
            <NavLink href="" className="text-reset">
              About Us
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" className="text-reset">
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" className="text-reset">
              Privacy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" className="text-reset">
              Policy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="" className="text-reset">
              Terms & Conditions
            </NavLink>
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
