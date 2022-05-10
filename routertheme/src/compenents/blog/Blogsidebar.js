import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Blogsidebar({ image, title }) {
  return (
    <div>
        <div className="card mb-3" style={{maxWidth: '540px'}}>
            <Row className="g-0">
              <Col md="5">
                <img src={image} className="img-fluid rounded-start" style={{height: '7rem'}} alt="..." />
              </Col>
              <Col md="7">
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </Col>
            </Row>
          </div>
    </div>
  )
}
