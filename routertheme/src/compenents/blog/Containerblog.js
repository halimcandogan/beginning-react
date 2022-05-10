import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Blogcard from './Blogcard';
import Blogsidebar from './Blogsidebar';

export default function Containerblog() {
  return (
    <div>
   <section className="blogger mt-6">
    <Container>
      <Row>
        <Col sm="8">
          <Blogcard title="Web Tasarımla ilgili 3 İpucu" image="img/weblog.png" write="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate blanditiis magni delectus assumenda animi libero quisquam in deleniti possimus." />
          <Blogcard title="Yazılım Nedir ? " image="img/yazilimblog.jpg" write="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate blanditiis magni delectus assumenda animi libero quisquam in deleniti possimus." />
          <Blogcard title="En İyi Renk Çiftleri" image="img/eniyirenkblog.png" write="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptate blanditiis magni delectus assumenda animi libero quisquam in deleniti possimus." />
        </Col>
        <Col sm="4" >
          <h5 className=" text-black fw-bold text-center fs-3">Yazılar</h5>
          <Blogsidebar title="Web Tasarımla ilgili 3 ipucu" image="img/weblog.png"/>
          <Blogsidebar title="Yazılım Nedir ?" image="img/yazilimblog.jpg"/>
          <Blogsidebar title="En İyi Renk Çiftleri" image="img/eniyirenkblog.png"/>
        </Col>
      </Row>
    </Container>
  </section>
  </div>
  )
}
