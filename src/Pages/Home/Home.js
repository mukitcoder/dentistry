import React from "react";
import { Container } from "react-bootstrap";
import Doctors from "./Doctors/Doctors";
import Services from "./Services/Services";

const Home = () => {
  return (
    <>
      <Container>
        <Services></Services>
        <Doctors></Doctors>
      </Container>
    </>
  );
};

export default Home;
