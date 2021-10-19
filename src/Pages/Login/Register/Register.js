import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import regiImage from "../../../images/register.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

const Register = () => {
  const { signInUsingGoogle } = useAuth();
  const { signInUsingGithub } = useAuth();
  const { handleRegistration } = useAuth();
  const { handleEmailChange } = useAuth();
  const { handlePasswordChange } = useAuth();
  const { error } = useAuth();

  return (
    <div>
      <Container className="mt-5">
        <div className="text-center">
          <h2>Sign up for free and get your service today</h2>
        </div>
        <Row className="g-4">
          <Col md={6}>
            <Form onSubmit={handleRegistration}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Full Name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Your Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  onBlur={handleEmailChange}
                  type="email"
                  placeholder="Enter email"
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onBlur={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I agree to platform's Terms of service and Privacy statement"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <div className="mt-3">
                  <p className="lead text-danger fw-bold">{error}</p>
              </div>

              <div className="my-2">
                <Link className=" fw-bold  text-decoration-none text-success fs-5" to="/login">Already have an account?</Link>
              </div>
            </Form>
            <Button variant="outline-primary" className="my-2 px-3" onClick={signInUsingGoogle}> <FontAwesomeIcon className="me-2" icon={faGoogle} />Google Sign In</Button>
          <br />
          <Button variant="outline-dark" className="my-2 px-3"  onClick={signInUsingGithub}><FontAwesomeIcon className="me-2" icon={faGithub} />Github Sign In</Button>
          </Col>

          <Col md={6}>
            <img className="img-fluid" src={regiImage} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
