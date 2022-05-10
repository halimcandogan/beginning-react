import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
         
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow py-4">
      <div className="container ">
        <Link className="navbar-brand" to="/">
          <img src="img/logo.png" alt="" width={190} height={35} className="d-inline-block align-text-top img-fluid" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
              <Link className="nav-link active fw-bold px-3" to="/" >Anasayfa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fw-bold px-3" to="/aboutus" >Hakkımızda</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fw-bold px-3" to="/ourservices" >Hizmetlerimiz</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fw-bold px-3" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active fw-bold px-3" to="/contact">İletişim</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    </div>
  )
}
