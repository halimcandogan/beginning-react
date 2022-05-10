import React from 'react'


export default function services({image, context}) {
  return (
    <div>
         
          <div className="card bg-dark text-white border-0 crd-hvr">
            <img src={image} className="card-img  " style={{maxHeight: '220px'}} alt="..." />
            <div className="card-img-overlay d-flex align-items-end">
              <h5 className="card-title p-2 bg-light text-black">{context}</h5>
            </div>
          </div>
        
    </div>
  )
}
