import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "./Banner";
import Doctors from "./Doctors/Doctors";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
    <Banner></Banner>
      <Container>
      {/* <Row md={12}>
          <Col>
          <h1>Our Services</h1>
          </Col>
      </Row> */}
        <Services></Services>
        <Doctors></Doctors>
      </Container>
    </>
  );
};

export default Home;
