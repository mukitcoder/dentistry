import React, { useEffect, useState } from "react";
import { Row, Col, Container, Card , Button} from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Booking = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`/dentalServices.json`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  const booked = service.find((dental) => dental.id === id);
  return (
    <>
      <Container className="mt-5">
        <Card className="card mb-3 w-75 mx-auto">
          <Row>
            <Col md={4}>
              <img src={booked?.img}className="img-fluid rounded-start" alt="..." />
            </Col>
            <Col md={8}>
              <Card.Body>
                <h2 className="card-title">{booked?.serviceName}</h2>
                <p className="card-text">
                  {booked?.description}
                </p>
                <p className="card-text">
                  <Link to="/appointment">
                  <Button>Book For Appointment</Button>
                  </Link>
                </p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default Booking;
