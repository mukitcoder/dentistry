import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import doctor1 from "../../../images/doctor-1.jpg";
import doctor2 from "../../../images/doctor-2.jpg";
import doctor3 from "../../../images/doctor-3.jpg";

// Doctors section
const Doctors = () => {
  return (
    <div id="doctors">
      <h1 className="text-center pt-5 text-primary fw-bolder my-5">Our Specialized and Experienced Dentist</h1>
      <hr className="text-danger" />
      <Row xs={1} md={3} className="g-4 text-center">
        <Col>
          <Card className="shadow-lg">
            <Card.Img className="animate__animated animate__bounceInLeft animate__delay-2s	2s" variant="top" src={doctor1} />
            <Card.Body>
              <Card.Title className="display-6">Dr. John Melborn</Card.Title>
              <Card.Text className="lead fw-bold">
                Prosthodontics Dentist
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-lg">
            <Card.Img variant="top" src={doctor2} />
            <Card.Body>
              <Card.Title className="display-6">Dr. Ena Dicrosa</Card.Title>
              <Card.Text className="lead fw-bold">
                Aesthetic Dentistry
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="shadow-lg">
            <Card.Img className="animate__animated animate__bounceInRight animate__delay-2s	2s" variant="top" src={doctor3} />
            <Card.Body>
              <Card.Title className="display-6">Dr. Addison Smith</Card.Title>
              <Card.Text className="lead fw-bold">
                Gastroenterologists
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Doctors;
