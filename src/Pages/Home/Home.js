import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Banner from "./Banner";
import Doctors from "./Doctors/Doctors";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <div id="home">
        <Banner></Banner>
        <Container>
          <Services></Services>
          <Doctors></Doctors>
        </Container>
      </div>
    </>
  );
};

export default Home;
