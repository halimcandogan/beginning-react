import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Hero({title, context, image}) {
  return (
    <div>
    
  
    <Container>
      <Row style={{ marginTop: "4rem" }}>
        <Col lg="6" className="mb-3">
          <div className="d-flex justify-content-center align-items-center flex-column h-100 ">
            <h6 className="display-5">{title}</h6>
            <p>{context}</p>
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
