import React from "react";
import { Link } from "react-router-dom";


function Yazılımnedır(){
    return(
<React.Fragment>
  <section className="navb">
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow py-4 sticky-top">
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
  </section>
  <section className="hero">
    <div className="container-fluid" style={{backgroundImage: 'url(img/eksayfa.png)', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '20rem'}}>
      <div className="container container-sm " style={{height: '15rem'}}>
        <div className="d-flex align-items-center h-100 ">
          <h6 className="text-white display-5 fw-bold">Blog</h6>
        </div>
      </div>
    </div>
  </section>
  <section className="blogger mt-6">
    <div className="container ">
      <div className="row">
        <div className="col-12 col-sm-8">
          <div className="card mb-3">
            <img src="img/yazilimblog.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title fs-3 p-2">Yazılım nedir?</h5>
              <p className="card-text">&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magni at et quis velit ipsa non enim cumque, ducimus voluptatum illo qui dolores a ipsam explicabo suscipit eveniet ab, fugiat officiis laudantium est accusamus! Beatae, voluptate? Esse reprehenderit quisquam iusto nam deleniti! Inventore nihil ipsum, alias deleniti optio earum aliquam tempora voluptas hic quod voluptatibus a voluptate suscipit, consectetur libero! .Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem excepturi quam molestias impedit, maiores, porro explicabo quas recusandae dolor unde odio harum tempora ipsa labore culpa? Amet, tenetur vitae, consectetur nam eos magni soluta neque impedit quas nemo quo laudantium, quod cumque. In, at distinctio. Enim quaerat delectus consequatur tenetur! <br /> &nbsp;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt obcaecati accusantium corrupti optio neque distinctio quas possimus, voluptate eum laboriosam odio consequuntur facilis nam est ducimus quos quibusdam inventore harum dignissimos aperiam soluta delectus. Nihil sed magnam nostrum facere maiores illum, aliquam eius praesentium delectus cum voluptates sequi repellendus! Vel cum minus in repellendus eligendi ipsam aliquid, eius pariatur eos!</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <h5 className=" text-black fw-bold text-center fs-3">Yazılar</h5>
          <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-5">
                <img src="img/weblog.png" className="img-fluid rounded-start" style={{height: '7rem'}} alt="..." />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">Web Tasarımla ilgili 3 ipucu</h5>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-5">
                <img src="img/yazilimblog.jpg" className="img-fluid rounded-start" style={{height: '6rem'}} alt="..." />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">Yazılım</h5>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3" style={{maxWidth: '540px'}}>
            <div className="row g-0">
              <div className="col-md-5">
                <img src="img/eniyirenkblog.png" className="img-fluid rounded-start" style={{height: '6rem'}} alt="..." />
              </div>
              <div className="col-md-7">
                <div className="card-body">
                  <h5 className="card-title">En iyi renk çiftleri</h5>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="footer mt-5">
    <div className="container-fluid p-3 mb-0" style={{background: 'linear-gradient(90deg, rgba(60,60,60,1) 0%, rgba(104,57,175,1) 65%)'}}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="pt-4">
              <img src="img/logobeyaz.png" alt="img-fluid" style={{width: '220px'}} />
              <p className="text-white">HC Dijital Tüm Hakları Saklıdır.</p>
            </div>
            <div className=" d-flex ">
              <i className="fa-solid fa-phone text-white" style={{fontSize: '15px'}} />
              <p className=" text-white px-2" style={{fontSize: '15px'}}>0580 522 5222 <br /> <span className="opacity-50">hcdijital@gmail.com</span> </p>
            </div>
            <div className=" d-flex justify-content-start">
              <i className="fa-solid fa-map-location-dot text-white" style={{fontSize: '15px'}} />
              <p className=" text-white px-2" style={{fontSize: '15px'}}>Kızılay, Karanfil Sk. No:11, 06420 Çankaya/Ankara</p>
            </div>
          </div>
          <div className="col  pt-4">
            <div className="d-flex justify-content-around">
              <div className="d-flex justify-content-start flex-column">
                <p className="text-white fs-4">Hizmetlerimiz</p>
                <ul className="text-white">
                  <li>Web Tasarım</li>
                  <li>Web Tasarım</li>
                  <li>Web Tasarım</li>
                  <li>Web Tasarım</li>
                  <li>Web Tasarım</li>
                  <li>Web Tasarım</li>
                </ul>
              </div>
              <div className="d-flex justify-content-start flex-column px-4">
                <p className="text-white fs-4">Bloglarımız</p>
                <ul className="text-white">
                  <li>Web Tasarımla ilgili 3 ipucu</li>
                  <li>Yazılım Nedir?</li>
                  <li>En iyi renk çiftleri</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div style={{border: '1px solid black'}} id="yukari">
    <i className="fa fa-arrow-up" />
  </div>
</React.Fragment>

    )
}

export default Yazılımnedır;