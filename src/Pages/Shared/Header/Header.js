import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Container fluid>
          <img className="img-fluid w-25" src={logo} alt="" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 fw-bold"
              style={{ maxHeight: "200px"}}
              navbarScroll
            >
              <Nav.Link className="text-white" href="/home">Home</Nav.Link>
              <Nav.Link className="text-white" href="/services">Services</Nav.Link>
              <Nav.Link className="text-white" href="#action2">Dentist</Nav.Link>
              <Nav.Link className="text-white" href="#action2">Appointment</Nav.Link>
             </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
