import React from "react";
import Navbar from "../compenents/shared/Navbar"
import Footer from "../compenents/shared/Footer/Containerfooter"
import Abovebutton from "../compenents/shared/Abovebutton"
import Header from "../compenents/shared/Header"
import Containercontact from "../compenents/contact/Containercontact";
import { useTranslation } from 'react-i18next';

function Contact(){
    const { t, i18n } = useTranslation();
    return(
<React.Fragment>
        <Navbar />
        <Header title={t("iletişim")} />
        <Containercontact title={t('contact')} image="img/contact.jpg"/>
        <Footer />
        <Abovebutton />
</React.Fragment>

    )
}

export default Contact;