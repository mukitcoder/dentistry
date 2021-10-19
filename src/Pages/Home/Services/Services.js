import React, { useEffect, useState } from "react";
import { Row, Spinner, Container } from "react-bootstrap";
import Service from "../Service/Service";
import 'animate.css';

// Services section
const Services = () => {
  const [services, setServices] = useState([]);

  // Load data
  useEffect(() => {
    fetch(`/dentalServices.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <Container className="" id="services">
        <h1 className="text-center my-4 fw-bold pt-5 text-primary animate__animated animate__bounce">OUR DENTAL SERVICES</h1>
        <hr className="text-danger" />
      {services.length === 0 ? (
        <Spinner animation="grow" variant="warning" />
      ) : (
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Services;