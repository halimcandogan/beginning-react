import React from 'react'

export default function Header({ title }) {
  return (
    <div>
       
    <div className="container-fluid" style={{backgroundImage: 'url(img/eksayfa.png)', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '20rem'}}>
      <div className="container " style={{height: '15rem'}}>
        <div className="d-flex align-items-center h-100 ">
          <h6 className="text-white display-5 fw-bold">{title}</h6>
        </div>
      </div>
    </div>
  
    </div>
  )
}
