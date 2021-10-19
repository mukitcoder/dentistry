import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./FirstSection.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTeeth, faTeethOpen, faTooth } from "@fortawesome/free-solid-svg-icons";

const FirstSection = () => {
  return (
    <div>
      <Row className="mt-5" md={3}>
        <Card className="text-center text-white body-color ">
          <Card.Body>
            <Card.Title className="fw-bold fs-3">  <FontAwesomeIcon className="me-3" icon={faTooth}/>Certified Dentist</Card.Title>
            <Card.Text className="lead">
            A dentist who is board certified has gone through much more experience and training. When a dentist is board certified, it means they've gone above and beyond the basic degree requirements for dental licensure in order to best serve their patients, family, and friends.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default FirstSection;
