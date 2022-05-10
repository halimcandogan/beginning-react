import React from 'react'
import Box from './Box'

export default function ContainerinfoBox() {
  return (
    <div>
      <section className="info" style={{backgroundImage: 'url(img/ddd.png)', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat'}}>
    <div className="container mt-5">
      <div className="row">
        <Box header="Strateji" image="img/strategy.png" content="Some quick example text to build on the card title and make up the bulk of the card's
                    content." property="col-lg-3 col-md-6 col-sm-6 " />
        <Box header="Zamana Yönelik" image="img/clock.png" content="Some quick example text to build on the card title and make up the bulk of the card's
                    content." property="col-lg-3 col-md-6 col-sm-6 mt-5" />
        <Box header="Doğru Planlama" image="img/target.png" content="Some quick example text to build on the card title and make up the bulk of the card's
                    content." property="col-lg-3 col-md-6 col-sm-6 " />
        <Box header="Teknoloji" image="img/processor.png" content="Some quick example text to build on the card title and make up the bulk of the card's
                    content." property="col-lg-3 col-md-6 col-sm-6 mt-5" />
          
      </div></div>
      </section>
    </div>
  )
}
