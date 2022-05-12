import React from "react";
import Navbar from "../compenents/shared/Navbar"
import Header from "../compenents/shared/Header"
import AboutUs from "../compenents/aboutUs/AboutUs.js"
import ContainerinfoBox from "../compenents/infoBox/ContainerinfoBox"
import Containerreference from "../compenents/reference/Containerreference"
import Containerfooter from "../compenents/shared/Footer/Containerfooter"
import Abovebutton from "../compenents/shared/Abovebutton"
import Titlebox from "../compenents/shared/Titlebox";
import { useTranslation } from 'react-i18next';




function Aboutus(){
    const {t} = useTranslation();
    return(
        <React.Fragment>
 
        <Navbar />
        <Header title={t("hakkimizda")}/>
        <AboutUs title={t("about-box")} writing="&nbsp;&nbsp; Lorem ipsum dolor, sit amet consectetur adipisicing elit. A atque mollitia
              voluptatibus sed odit nemo illum iusto ipsum veritatis nostrum! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Autem quas laudantium perspiciatis beatae quis dignissimos enim reiciendis laboriosam
              cupiditate mollitia! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique accusantium expedita nemo, possimus adipisci quo ullam! Iure optio nesciunt porro facilis laborum.
              Voluptate veniam, odio aperiam eos, voluptas est sed voluptatibus maiores corrupti laboriosam autem? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur nobis facilis. Atque quod labore suscipit
              numquam saepe et possimus. Lorem ipsum dolor sit amet." image="img/kimiz.jpg" />
        <ContainerinfoBox />
        <Titlebox title={t("reference-box")} information={t("reference-info")} />
        <Containerreference />
        <Containerfooter />
      
       

  

  <Abovebutton />
</React.Fragment>

    )
}

export default Aboutus;