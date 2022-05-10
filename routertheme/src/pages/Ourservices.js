import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../compenents/shared/Navbar";
import Header from "../compenents/shared/Header";
import Containerservices from "../compenents/ourServices/Containerservices";
import Containerfooter from "../compenents/shared/Footer/Containerfooter";
import Abovebutton from "../compenents/shared/Abovebutton";

function Ourservices() {
    return (
<React.Fragment>
  <Navbar /> 
  <Header title="Hizmetlerimiz"/>
  <Containerservices />
  <Containerfooter />
  <Abovebutton />
</React.Fragment>

    )
}

export default Ourservices;