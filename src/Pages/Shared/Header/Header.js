import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";

const Header = () => {
    const {user, logOut} = useAuth();
  return (
    <div>
      <Navbar bg="primary" expand="lg" sticky="top">
        <Container fluid>
          <img className="img-fluid w-25" src={logo} alt="" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0 fw-bold"
              style={{ maxHeight: "200px" }}
              navbarScroll
            >
              <Nav.Link className="text-white" as={Link} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="/home#doctors">
                Dentist
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to="#action2">
                Appointment
              </Nav.Link>
              <Navbar.Text className="ms-2">
                Signed in as: <a href="/login">Mark</a>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
