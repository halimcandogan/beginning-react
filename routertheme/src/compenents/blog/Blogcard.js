import React from 'react'
import Blogbutton from '../indexBlog/Blogbutton'

export default function Blogcard({ image, title, write }) {
  
  return (
    <div>
        <div className="card border-0 ">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fw-bold mt-3">{title}</h5>
              <p className="card-text">{write}</p>
              <Blogbutton />
            </div>
          </div>
    </div>
  )
}
