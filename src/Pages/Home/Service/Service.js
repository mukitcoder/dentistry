import React from "react";
import { Card, Col, Button } from "react-bootstrap";

const Service = ({ service }) => {
  const { serviceName, description, img, btnName } = service;
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{serviceName}</Card.Title>
            <Card.Text>{description.substring(0, 150)}...</Card.Text>
            <Button>{btnName}</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Service;
