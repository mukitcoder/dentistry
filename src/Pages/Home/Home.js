import React from "react";
import { Container } from "react-bootstrap";
import Banner from "./Banner";
import Doctors from "./Doctors/Doctors";
import FirstSection from "./FirstSection/FirstSection";
import Services from "./Services/Services";
import SingleDoctor from "./SingleDoctor/SingleDoctor";

// Home Section
const Home = () => {
  return (
    <>
      <div id="home">
        <Banner></Banner>
        <Container>
          <FirstSection></FirstSection>
          <Services></Services>
          <Doctors></Doctors>
          <SingleDoctor></SingleDoctor>
        </Container>
      </div>
    </>
  );
};

export default Home;
