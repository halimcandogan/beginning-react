import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Services from './Services';

export default function Containerservices() {
  return (
    <div>
        <section className="hizmetler ">
    <Container className="mt-5">
      <Row>
      <Col lg="4" md="6" className="mb-3"> <Services image="img/webtasarim.jpg" context="Web Tasarım" /></Col>
      <Col lg="4" md="6" className="mb-3"> <Services image="img/seo.png" context="Seo" /></Col>
      <Col lg="4" md="6" className="mb-3"> <Services image="img/tasarim.jpg" context="Tasarım" /></Col>
      <Col lg="4" md="6" className="mb-0"> <Services image="img/reklam.jpg" context="Reklam" /></Col>
      <Col lg="4" md="6" className="mb-0"> <Services image="img/sosyalmedya.jpg" context="Sosyal Medya" /></Col>
      <Col lg="4" md="6" className="mb-0"> <Services image="img/yazılım.jpg" context="Yazılım" /></Col>
      </Row>
    </Container>
  </section>
    </div>
  )
}
