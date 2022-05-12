import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Blogcard from './Blogcard';
import Blogsidebar from './Blogsidebar';

export default function Containerblog() {
  const {t} = useTranslation();
  return (
    <div>
   <section className="blogger mt-6">
    <Container>
      <Row>
        <Col sm="8">
          <Blogcard title={t("blog-title1")} image="img/weblog.png" write="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate blanditiis magni delectus assumenda animi libero quisquam in deleniti possimus." />
          <Blogcard title={t("blog-title2")} image="img/yazilimblog.jpg" write="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate blanditiis magni delectus assumenda animi libero quisquam in deleniti possimus." />
          <Blogcard title={t("blog-title3")} image="img/eniyirenkblog.png" write="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate blanditiis magni delectus assumenda animi libero quisquam in deleniti possimus." />
        </Col>
        <Col sm="4" >
          <h5 className=" text-black fw-bold text-center fs-3">{t("yazılar")}</h5>
          <Blogsidebar title={t("blog-title1")} image="img/weblog.png"/>
          <Blogsidebar title={t("blog-title2")} image="img/yazilimblog.jpg"/>
          <Blogsidebar title={t("blog-title3")} image="img/eniyirenkblog.png"/>
        </Col>
      </Row>
    </Container>
  </section>
  </div>
  )
}
