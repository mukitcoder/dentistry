import React from "react";
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import footerImg from "../../../images/logo.png";

const Footer = () => {
  return (
    <div>
      <Container fluid className="bg-primary text-white pb-2">
        <div className=" d-flex mx-auto">
          <img className="img-fluid mx-auto" src={footerImg} alt="" />
        </div>
        <Row md={4}>
          <Col>
            <ul>
              <li className="fs-4 fw-bold">Explore</li>
              <li>Home</li>
              <li>About</li>
              <li>Carrier</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li className="fs-4 fw-bold">Overview</li>
              <li>Contact</li>
              <li>Term of Use</li>
              <li>Privacy</li>
            </ul>
          </Col>
          <Col>
            <ul>
              <li className="fs-4 fw-bold">Community</li>
              <li>Support</li>
              <li>Help</li>
              <li>Media</li>
            </ul>
          </Col>
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Email Address"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text className="btn btn-info text-white fw-bold" id="basic-addon2">Subscribe</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <Col className="d-flex justify-content-between align-items-center">
        <p>© 2021 Dentistry Company Inc. All rights reserved.</p>
        <p>Created By Abdullah Al Mukit</p>
        <div>
        <FontAwesomeIcon className="fs-2" icon={faFacebook} />
        <FontAwesomeIcon className="mx-5 fs-2" icon={faGithub} />
        <FontAwesomeIcon className=" fs-2" icon={faInstagram} />
        </div>
        </Col>
      </Container>
    </div>
  );
};

export default Footer;
