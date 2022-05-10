import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Titlebox({ title, information, property }) {
  return (
    <div>
   <Container fluid className={property} style={{background: 'linear-gradient(90deg, rgba(104,57,175,1) 35%, rgba(0,0,0,1) 100%)'}}>
      <h6 className="display-6 text-white d-flex justify-content-center pt-3">{title}</h6>
      <p className="d-flex text-white justify-content-center pb-2 fs-5">{information}</p>
    </Container>

    </div>
  )
}
