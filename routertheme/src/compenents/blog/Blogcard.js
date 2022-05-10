import React from 'react'

export default function Blogcard({ image, title, write }) {
  return (
    <div>
        <div className="card border-0 ">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold mt-3">{title}</h5>
              <p className="card-text">{write}</p>
              <a href="web-tasarımla-ilgili-3-ipucu.html" className="btn btn-dark btn-hvr">Devamını Oku</a>
            </div>
          </div>
    </div>
  )
}
