import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Blogfooter() {
  const {t} = useTranslation();
  return (
    <div>
         <div className="d-flex justify-content-start flex-column px-4">
                <p className="text-white fs-4">{t("blog-box")}</p>
                <ul className="text-white">
                  <li>{t("blog-title1")}</li>
                  <li>{t("blog-title2")}</li>
                  <li>{t("blog-title3")}</li>
                </ul>
              </div>
    </div>
  )
}
