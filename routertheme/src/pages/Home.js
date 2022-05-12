import React from "react";
import Navbar from "../compenents/shared/Navbar"
import Footer from "../compenents/shared/Footer/Containerfooter"
import Abovebutton from "../compenents/shared/Abovebutton"
import Hero from "../compenents/hero/Hero";
import Titlebox from "../compenents/shared/Titlebox"
import Containerservices from "../compenents/ourServices/Containerservices"
import Containerabout from "../compenents/indexAbout/Containerabout";
import ContainerinfoBox from "../compenents/infoBox/ContainerinfoBox";
import Containerreference from "../compenents/reference/Containerreference"
import Containerindexblog from "../compenents/indexBlog/Containerindexblog";
import { useTranslation } from 'react-i18next';



function Home() {
  const { t } = useTranslation();
  
  return (
    <React.Fragment>
       <Navbar />
       <Hero title="Dijital Dünyada Sende Yerini Al" context="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, reiciendis accusantium quaerat reprehenderit doloribus rerum." image="img/hero.png"/>
      <Titlebox title={t("hizmetlerimiz-box")} property="mt-5" />
      <Containerservices />
      <Containerabout title={t("about-box")} context="&nbsp&nbsp Lorem ipsum dolor, sit amet consectetur adipisicing elit. A atque mollitia
          voluptatibus sed odit nemo illum iusto ipsum veritatis nostrum! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Autem quas laudantium perspiciatis beatae quis dignissimos enim reiciendis laboriosam
          cupiditate mollitia! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Similique accusantium expedita nemo, possimus adipisci quo ullam! Iure optio nesciunt porro facilis laborum.
          Voluptate veniam, odio aperiam eos, voluptas est sed voluptatibus maiores corrupti laboriosam autem? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Veniam aspernatur nobis facilis. Atque quod labore suscipit
          numquam saepe et possimus. Lorem ipsum dolor sit amet."/>
     <ContainerinfoBox />
     <Titlebox title={t("reference-box")} information={t("reference-info")} />
     <Containerreference />
     <Titlebox title={t("blog-box")}  />
     <Containerindexblog />
     <Footer />
     <Abovebutton />
    </React.Fragment>
  );
}

export default Home;
