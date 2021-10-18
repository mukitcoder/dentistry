import React from "react";
import { Carousel, Col, Button, Row } from "react-bootstrap";
import slide1 from "../../images/slider-1.jpg";
import slide2 from "../../images/slider-2.jpg";
import slide3 from "../../images/slider-3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption className="d-flex mb-md-5">
            <Row md={8} className="">
              <Col className="mb-md-5 pb-md-5 mb-sm-0 pb-sm-0">
                <h1 className="text-primary display-6 fw-bolder pb-md-2">
                  Personalized Dental <span className="text-danger">Care</span>{" "}
                </h1>
                <p className="lead-md text-dark pb-md-2 bg-opacity-50 bg-info px-md-2 rounded-pill">
                  People can go weeks, months, and even years without taking
                  care of their teeth...
                </p>
                <Button className="btn-primary">Book Appointment</Button>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />

          <Carousel.Caption className="d-flex mb-md-5">
            <Row md={8} className="">
              <Col className="mb-md-5 pb-md-5 mb-sm-0 pb-sm-0">
                <h1 className="text-primary display-6 fw-bolder pb-md-2">
                  Your Health is Our Top{" "}
                  <span className="text-danger">Priority</span>{" "}
                </h1>
                <p className="lead-md text-dark pb-md-2 bg-opacity-50 bg-info px-md-2 rounded-pill">
                  People can go weeks, months, and even years without taking
                  care of their teeth...
                </p>
                <Button className="btn-primary">Book Appointment</Button>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />

          <Carousel.Caption className="d-flex mb-md-5">
            <Row md={8} className="">
              <Col className="mb-md-5 pb-md-5 mb-sm-0 pb-sm-0">
                <h1 className="text-primary display-6 fw-bolder pb-md-2">
                  Exceptional Care for{" "}
                  <span className="text-danger">Women</span>{" "}
                </h1>
                <p className="lead-md text-dark pb-md-2 bg-opacity-50 bg-info px-md-2 rounded-pill">
                  People can go weeks, months, and even years without taking
                  care of their teeth...
                </p>
                <Button className="btn-primary">Book Appointment</Button>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
