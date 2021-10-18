import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { serviceName, description, img, btnName, id } = service;
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{serviceName}</Card.Title>
            <Card.Text>{description.substring(0, 150)}...</Card.Text>
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
