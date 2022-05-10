import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function AboutUs({ title, writing, image }) {
  return (
    <div>
      
    <Container>
      <Row className="mt-6">
        <Col lg="6" className="mb-3">
          <div className="d-flex justify-content-center  flex-column h-100 ">
            <h6 className="display-5 fw-bold">{title}</h6>
            <p className="fs-5">{writing}</p>
          </div>
        </Col>
        <Col lg="6">
          <img src={image} className="img-fluid" alt="" />
        </Col>
      </Row>
    </Container>
  
    </div>
  )
}
