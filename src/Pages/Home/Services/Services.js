import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`dentalServices.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services-container">
      {services.length === 0 ? (
        <Spinner animation="grow" variant="warning" />
      ) : (
        <Row xs={1} md={3} className="g-4">
          {services.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Services;
