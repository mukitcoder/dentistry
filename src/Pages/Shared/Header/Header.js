import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const {user, logOut, photoURL} = useAuth();
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
              <Navbar.Text className="ms-3 ">
                <img width="30px" className="img-fluid rounded-circle" src= {user?.photoURL} alt="" />
              </Navbar.Text>
              <Navbar.Text className="mx-3 ">
                <a className="text-white" href="#login">{user?.displayName}</a>
              </Navbar.Text>
              {
                  user?.email? 
                  <Button className="text-white fw-bold" onClick={logOut} variant="danger">Sign out </Button>:
                  <Nav.Link className="text-white" as={Link} to="/login">Sign In </Nav.Link>
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
