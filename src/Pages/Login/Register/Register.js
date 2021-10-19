import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginImage from "../../../images/login.jpg";
const Register = () => {
  const { signInUsingGoogle } = useAuth();
  const { signInUsingGithub } = useAuth();
  return (
    <div>
      <Container className="mt-5">
        <div className="text-center">
          <h2>Sign up for free and get your service today</h2>
        </div>
        <Row className="g-4">
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Full Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Your Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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

              <div className="my-2">
                <Link to="/login">Already have an account?</Link>
              </div>
            </Form>
            <Button className="my-2" onClick={signInUsingGoogle}>
              Google Sign In
            </Button>
            <br />
            <Button onClick={signInUsingGithub}>Github Sign In</Button>
          </Col>

          <Col md={6}>
            <img className="img-fluid" src={loginImage} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
