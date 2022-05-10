import React from 'react'

export default function Box({ image, header, content, property }) {
  return (
    <div className={property}>
    <div className="card border-0" style={{backgroundColor: 'rgba(255, 255, 255, 0)'}}>
      <div className="d-flex justify-content-center align-items-center">
        <img src={image} className="img-fluid infohover" style={{width: '170px'}} alt="..." /></div>
      <div className="card-body">
        <h5 className="card-title">{header}</h5>
        <p className="card-text">{content}</p>
      </div>
    </div>
  </div>
  )
}
