import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./FirstSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAmericanSignLanguageInterpreting,
  faHeartbeat,
  faTeeth,
  faTeethOpen,
  faTooth,
} from "@fortawesome/free-solid-svg-icons";

const FirstSection = () => {
  return (
    <div>
      <Row className="mt-5 g-4" md={3} xs={1}>
        <Col>
          <Card className="text-center text-white body-color">
            <Card.Body className="">
              <Card.Title className="fw-bold fs-3">
                {" "}
                <FontAwesomeIcon className="me-3" icon={faTooth} />
                Certified Dentist
              </Card.Title>
              <Card.Text className="lead">
                A dentist who is board certified has gone through much more
                experience and training. When a dentist is board certified, it
                means they've gone...
              </Card.Text>
              <Card.Title>
                  <span className="read">Read more</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center text-white body-color2">
            <Card.Body className="">
              <Card.Title className="fw-bold fs-3">
                {" "}
                <FontAwesomeIcon className="me-3" icon={faAmericanSignLanguageInterpreting} />
                New Technology
              </Card.Title>
              <Card.Text className="lead">
                A dentist who is board certified has gone through much more
                experience and training. When a dentist is board certified, it
                means they've gone ...
              </Card.Text>
              <Card.Title>
                  <span className="read">Read more</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="text-center text-white body-color3">
            <Card.Body className="">
              <Card.Title className="fw-bold fs-3">
                {" "}
                <FontAwesomeIcon className="me-3" icon={faHeartbeat} />
                Accept Insurance
              </Card.Title>
              <Card.Text className="lead">
                A dentist who is board certified has gone through much more
                experience and training. When a dentist is board certified, it
                means they've gone ...
              </Card.Text>
              <Card.Title>
                  <span className="read">Read more</span>
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FirstSection;
