import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../compenents/shared/Navbar"
import Footer from "../compenents/shared/Footer/Containerfooter"
import Abovebutton from "../compenents/shared/Abovebutton"
import Header from "../compenents/shared/Header"
import Containerblog from "../compenents/blog/Containerblog";

function Blog(){
    return(
<React.Fragment>
  <Navbar />
  <Header title="Bloglarımız"/>
  <Containerblog />
  <Footer />
  <Abovebutton /> 

</React.Fragment>
    )
}

export default Blog;