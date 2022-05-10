import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Form from "./Form"

export default function Containercontact({title, image}) {
  return (
    <div>
    <section id="contact" className="generic dark-bg">
      <Container>
        <Row>
          <Row className="d-flex justify-content-center align-items-center">
            <Col md="12" lg="6" >
            <h6 className="display-5 fw-bold mb-4">{title}</h6>
              <Form />
              
              </Col>
            <Col>
              <img src={image} alt="" className="img-fluid" />
            </Col>
          </Row>
          </Row>
          </Container>
          </section>
          </div>
  )
}
