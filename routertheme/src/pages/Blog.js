import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../compenents/shared/Navbar"
import Footer from "../compenents/shared/Footer/Containerfooter"
import Abovebutton from "../compenents/shared/Abovebutton"
import Header from "../compenents/shared/Header"
import Containerblog from "../compenents/blog/Containerblog";
import { useTranslation } from "react-i18next";

function Blog(){
  const {t} = useTranslation();
    return(
<React.Fragment>
  <Navbar />
  <Header title={t("blog")}/>
  <Containerblog />
  <Footer />
  <Abovebutton /> 

</React.Fragment>
    )
}

export default Blog;