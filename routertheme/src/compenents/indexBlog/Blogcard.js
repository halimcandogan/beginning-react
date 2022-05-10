import React from 'react'

export default function Blogcard({image, title, context}) {
  return (
    <div>
          <div className="card border-0 blg-hvr">
            <img src={image} className="card-img-top " style={{height: '220px'}} alt="..." />
            <div className="card-body border">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{context}</p>
              <a className="btn btn-dark btn-hvr">Devamı</a>
            </div>
          </div>
    </div>
  )
}
