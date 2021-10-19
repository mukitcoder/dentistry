import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'animate.css';

// Service Card
const Service = ({ service }) => {
  // destructuring
  const { serviceName, description, img, btnName, id } = service;
  return (
    <>
      <Col>
      {/* card section */}
        <Card className="shadow-lg animate__animated animate__bounceInUp animate__delay-2s	2s">
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="text-primary fw-bolder fs-4">{serviceName}</Card.Title>
            <Card.Text className="lead">{description.substring(0, 150)}...</Card.Text>
            <Link to={`/booking/${id}`}>
            <Button>{btnName}</Button>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Service;
