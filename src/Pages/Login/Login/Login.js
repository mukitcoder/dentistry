import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginImage from '../../../images/login.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";

// Login Section

const Login = () => {
  const { signInUsingGoogle } = useAuth();
  const { signInUsingGithub } = useAuth();
  const { handleEmailChange } = useAuth();
  const { handlePasswordChange } = useAuth();
  const {handleSignInWithEmailAndPassword} = useAuth();
  const { error } = useAuth();
  return (
      <>
    <Container className="mt-5">
      <div className="text-center">
      <h2>Please Login</h2>
      </div>
      <Row className="g-4">
        <Col md={6}>
          <Form onSubmit={handleSignInWithEmailAndPassword}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="I agree to platform's Terms of service and Privacy statement" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <div className="mt-3">
                  <p className="lead text-danger fw-bold">{error}</p>
              </div>

            <div className="my-2">
                <Link className=" fw-bold  text-decoration-none text-success" to="/register">* Need to Sign Up ?</Link>
            </div>
          </Form>
          <Button variant="outline-primary" className="my-2 px-3" onClick={signInUsingGoogle}> <FontAwesomeIcon className="me-2" icon={faGoogle} />Google Sign In</Button>
          <br />
          <Button variant="outline-dark" className="my-2 px-3"  onClick={signInUsingGithub}><FontAwesomeIcon className="me-2" icon={faGithub} />Github Sign In</Button>
        </Col>

        <Col md={6}>
            <img className="img-fluid" src= {loginImage} alt="" />
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Login;
