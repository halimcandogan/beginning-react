import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Services from './Services';
import { useTranslation } from 'react-i18next';

export default function Containerservices() {
  const { t } = useTranslation();
  return (
    <div>
        <section className="hizmetler ">
    <Container className="mt-5">
      <Row>
      <Col lg="4" md="6" className="mb-3"> <Services image="img/webtasarim.jpg" context={t("hizmetler1")} /></Col>
      <Col lg="4" md="6" className="mb-3"> <Services image="img/seo.png" context={t("hizmetler2")}  /></Col>
      <Col lg="4" md="6" className="mb-3"> <Services image="img/tasarim.jpg" context={t("hizmetler3")}  /></Col>
      <Col lg="4" md="6" className="mb-0"> <Services image="img/reklam.jpg" context={t("hizmetler4")}  /></Col>
      <Col lg="4" md="6" className="mb-0"> <Services image="img/sosyalmedya.jpg" context={t("hizmetler5")}  /></Col>
      <Col lg="4" md="6" className="mb-0"> <Services image="img/yazılım.jpg" context={t("hizmetler6")}  /></Col>
      </Row>
    </Container>
  </section>
    </div>
  )
}
