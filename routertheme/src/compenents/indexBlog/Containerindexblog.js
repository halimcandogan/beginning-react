import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Blogcard from './Blogcard';

export default function Containerindexblog() {
  return (
    <div>
        
        <Container className="mt-5">
    <div className="d-flex justify-content-center align-items-center">
      <Row>
        <Col md="6" sm="12" xl="4" >
          <Blogcard image="img/weblog.png" title="Web Tasarımla ilgili 3 ipucu" context="Some quick example text to build on the card title and make up the bulk of the
                card's
                content."/>
        </Col>
        <Col md="6" sm="12" xl="4">
        <Blogcard image="img/yazilimblog.jpg" title="Yazılım Nedir ?" context="Some quick example text to build on the card title and make up the bulk of the
                card's
                content."/>
        </Col>
        <Col md="6" sm="12" xl="4">
        <Blogcard image="img/eniyirenkblog.png" title="En iyi Renk Çiftleri" context="Some quick example text to build on the card title and make up the bulk of the
                card's
                content."/>
        </Col>
      </Row>
    </div>
  </Container>
  
  </div>
  )
}
