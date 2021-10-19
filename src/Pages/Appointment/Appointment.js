import React from "react";
import {
  Form,
  Button,
  FloatingLabel,
  Row,
  Col,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import appointImage from "../../images/appointment.jpg";

const Appointment = () => {
  return (
    <>
      <Container>
        <Row>
          <div className=" py-5">
            <h1 className="text-center">Make An Appointment</h1>
          </div>
          <Col md={6}>
            <FloatingLabel
              controlId="floatingInput"
              label="Your Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Your Full Name" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
              className="mb-3"
              controlId="floatingNumber"
              label="Phone Number"
            >
              <Form.Control type="number" placeholder="Phone Number" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Describe Your Problems"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <Link to="/register">
              <Button>Submit</Button>
            </Link>
          </Col>
          <Col md={6}>
            <img className="img-fluid" src={appointImage} alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Appointment;
