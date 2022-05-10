import React from "react";
import Navbar from "../compenents/shared/Navbar"
import Footer from "../compenents/shared/Footer/Containerfooter"
import Abovebutton from "../compenents/shared/Abovebutton"
import Header from "../compenents/shared/Header"
import Containercontact from "../compenents/contact/Containercontact";

function Contact(){
    return(
<React.Fragment>
        <Navbar />
        <Header title="İletişim" />
        <Containercontact title="Bize Mesaj Bırakın" image="img/contact.jpg"/>
        <Footer />
        <Abovebutton />
</React.Fragment>

    )
}

export default Contact;