import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './SingleDoctor.css'
import docSImg from '../../../images/single-doctor.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';

// Single Doctor section
const SingleDoctor = () => {
    return (
        <div>
             <div className="text-center my-4 py-4 col-md-8 mx-auto">
                    <h1 className="text-primary">
                    Features That You Will Love Us and <span className="text-danger fw-bold">Enjoy Specialized Care</span> 
                    </h1>
                </div>
            <Card className="mb-3 my-3">
  <Row className="g-0">
    <Col md={6}>
      <img src={docSImg} className="img-fluid rounded-start" alt="..."/>
    </Col>
    <Col md={6}>
      <Card.Body>
        <h1 className="card-title text-black-50">Our Patients Are Our Priority, We Offer Quality Dental Services</h1>
        <p className="card-text lead py-4">General dentists prevent, evaluate, diagnose, and treat diseases of the oral cavity, as well as maintain the function and appearance of the teeth. Many oral diseases and abnormalities can indicate other diseases. A general dentist may refer patients to their physician or a specialist for further evaluation, or vice versa for treatment.</p>
        <Row md={2}>
            <Col className="text-primary">
            <h5><FontAwesomeIcon className="me-2" icon={faHandPointRight} /> Complete Crown</h5>
            <h5><FontAwesomeIcon className="me-2" icon={faHandPointRight} />  Dental Implants</h5>
            <h5><FontAwesomeIcon className="me-2" icon={faHandPointRight} />  Dental X-Ray</h5>
            </Col>
            <Col className="text-primary">
            <h5><FontAwesomeIcon className="me-2" icon={faHandPointRight} />  Cosmetic Filling</h5>
            <h5><FontAwesomeIcon className="me-2" icon={faHandPointRight} />  Teeth Whitening</h5>
            <h5><FontAwesomeIcon className="me-2" icon={faHandPointRight} />  Root Canal</h5>
            </Col>
        </Row>
      </Card.Body>
    </Col>
  </Row>
</Card>
        </div>
    );
};

export default SingleDoctor;