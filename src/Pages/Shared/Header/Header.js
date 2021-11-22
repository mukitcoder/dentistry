import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";
import { HashLink } from 'react-router-hash-link';

// Header Section

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
              className="mx-auto my-lg-0 fw-bold"
              style={{ maxHeight: "300px" }}
              navbarScroll
            >
              <Nav.Link className="text-white" as={HashLink} to="/home#home">
                Home
              </Nav.Link>
              <Nav.Link className="text-white" as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link className="text-white" as={HashLink} to="/home#doctors">
                Dentist
              </Nav.Link>
              <Nav.Link className="text-white" as={HashLink} to="/appointment">
                Appointment
              </Nav.Link>
              <Nav.Link className="text-white" as={HashLink} to="/about">
                About Us
              </Nav.Link>
              <div className="ms-3 d-flex justify-content-center align-items-center">
                <img width="30px" className="img-fluid rounded-circle me-2" src= {user?.photoURL} alt="" />
                <a className="text-white" href="#login">{user?.displayName}</a>
              </div>
              <div className="d-flex justify-content-center align-items-center"> 
              {
                  user?.email? 
                  <Button className="text-white fw-bold ms-3" onClick={logOut} variant="danger">Sign out </Button>:
                  <Nav.Link className="text-white" as={Link} to="/login"><Button variant="success fw-bold">Sign In </Button></Nav.Link>
              }
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
