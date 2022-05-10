import React from 'react'

export default function Contactfooter({ image, copyright, phone, email, adress }) {
  return (
    <div>
            <div className="pt-4">
              <img src={image} alt="img-fluid " style={{width: '220px'}} />
              <p className="text-white">{copyright}</p>
            </div>
            <div className=" d-flex ">
              <i className="fa-solid fa-phone text-white" style={{fontSize: '15px'}} />
              <p className=" text-white px-2" style={{fontSize: '15px'}}>{phone} <br /> <span className="opacity-50">{email}</span> </p>
            </div>
            <div className=" d-flex justify-content-start">
              <i className="fa-solid fa-map-location-dot text-white" style={{fontSize: '15px'}} />
              <p className=" text-white px-2" style={{fontSize: '15px'}}>{adress}</p>
            </div>          
    </div>
  )
}
