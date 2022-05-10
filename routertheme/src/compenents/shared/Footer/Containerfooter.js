import React from 'react'
import Contactfooter from './Contactfooter'
import Servicesfooter from './Servicesfooter';
import Blogfooter from './Blogfooter';
import { Container, Row, Col } from 'react-bootstrap';

export default function Containerfooter() {
  return (
    <div>
      
    <Container fluid className="p-3 mb-0 mt-5" style={{background: 'linear-gradient(90deg, rgba(60,60,60,1) 0%, rgba(104,57,175,1) 65%)'}}>
      <Container>
        <Row>
          <Col><Contactfooter image="img/logobeyaz.png" copyright="HC Dijital Tüm Hakları Saklıdır." phone="0580 522 5222" email="hcdijital@gmail.com" adress="Kızılay, Karanfil Sk. No:11, 06420 Çankaya/Ankara"/></Col>
          <Col className="pt-4">
            <div className="d-flex justify-content-around">
              <Servicesfooter title="Web Tasarım"/>
              <Blogfooter />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  
    </div>
  )
}
