import React from "react";

export default function Logo({ image } ){
    return(
        <div>
            
  <div className="card border-0">
    <div className="d-flex justify-content-center align-items-center">
      <img src={image} className="img-fluid p-3 refhover" style={{height: '12rem'}} alt="..." />
    </div>
  </div>


        </div>
    )
}