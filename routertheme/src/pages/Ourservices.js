import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../compenents/shared/Navbar";
import Header from "../compenents/shared/Header";
import Containerservices from "../compenents/ourServices/Containerservices";
import Containerfooter from "../compenents/shared/Footer/Containerfooter";
import Abovebutton from "../compenents/shared/Abovebutton";
import { useTranslation } from "react-i18next";



function Ourservices() {
           const {t} = useTranslation();

    return (
<React.Fragment>
  <Navbar /> 
  <Header title={t("hizmetlerimiz")}/>
  <Containerservices />
  <Containerfooter />
  <Abovebutton />
</React.Fragment>

    )
}

export default Ourservices;