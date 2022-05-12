import React from 'react'
import Box from './Box'
import { useTranslation } from 'react-i18next';

export default function ContainerinfoBox() {
  const { t } = useTranslation();
  return (
    <div>
      <section className="info" style={{backgroundImage: 'url(img/ddd.png)', backgroundPosition: 'bottom', backgroundRepeat: 'no-repeat'}}>
    <div className="container mt-5">
      <div className="row">
        <Box header={t("info1")} image="img/strategy.png" content="Some quick example text to build on the card title and make up the bulk of the card's
                    content." property="col-lg-3 col-md-6 col-sm-6 " />
        <Box header={t("info2")} image="img/clock.png" content="Some quick example text to build on the card title and make up the bulk of the card's
                    content." property="col-lg-3 col-md-6 col-sm-6 mt-5" />
        <Box header={t("info3")} image="img/target.png" content="Some quick example text to build on the card title and make up the bulk of the card's
                    content." property="col-lg-3 col-md-6 col-sm-6 " />
        <Box header={t("info4")} image="img/processor.png" content="Some quick example text to build on the card title and make up the bulk of the card's
                    content." property="col-lg-3 col-md-6 col-sm-6 mt-5" />
          
      </div></div>
      </section>
    </div>
  )
}
