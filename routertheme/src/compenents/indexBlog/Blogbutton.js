import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Blogbutton() {
    const {t} = useTranslation();
  return (
    <div>
        <a className="btn btn-dark btn-hvr">{t("blog-button")}</a>
    </div>
  )
}
