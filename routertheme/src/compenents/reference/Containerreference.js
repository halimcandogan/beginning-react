import React from "react";
import Logo from "./Logo"
import Button from "./Button";
import Titlebox from "../shared/Titlebox";
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';



export default function Containerreference(){
    const { t } = useTranslation();
    return(
        <div>
  
     
    <Container className=" mt-3 mb-3">
    <Row>
            <Col sm="12" lg="4"><Logo image="img/bjk.png" /></Col>
            <Col sm="12" lg="4" ><Logo image="img/microsoft.webp"/></Col>
            <Col sm="12" lg="4"><Logo image="img/beko.png"/></Col>
   </Row>
        <Button context={t("reference-button")}/>
    </Container>
        </div>
    )
}