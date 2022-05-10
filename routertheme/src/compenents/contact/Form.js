import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Form() {
  return (
    <div>
         <form className="row">
                
                <Col>
                  <div className="input-group">
                    <div className="input-group-text rounded-0 border-black text-white" style={{backgroundColor: '#8B51E3'}}>
                      <i className="fa-solid fa-user" />
                    </div>
                    <input type="text" className="form-control rounded-0 border-black text-black bg-transparent" placeholder="İsminiz *" required />
                  </div>
                </Col>
                <Col>
                  <div className="input-group">
                    <div className="input-group-text rounded-0 border-black text-white" style={{backgroundColor: '#8B51E3'}}>
                      <i className="fa-solid fa-envelope" />
                    </div>
                    <input type="email" className="form-control rounded-0 border-black text-black bg-transparent" placeholder="Mail *" required />
                  </div>
                </Col>
                <Col sm="12" className="py-4">
                  <div className="input-group">
                    <div className="input-group-text rounded-0  border-black text-white" style={{backgroundColor: '#8B51E3'}}>
                      <i className="fa-solid fa-message" />
                    </div>
                    <textarea className="form-control rounded-0 border-black text-black bg-transparent" placeholder="Mesaj *" rows={5} required defaultValue={""} />
                  </div>
                </Col>
                <div className="d-grid">
                  <button className="btn text-white rounded-0 text-uppercase" type="submit" style={{backgroundColor: '#8B51E3'}}>
                    Gönder
                  </button>
                </div>
              </form>
    </div>
  )
}
