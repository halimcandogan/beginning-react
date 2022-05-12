import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Servicesfooter() {
  const {t} = useTranslation();
  return (
    <div>
        <div className="d-flex justify-content-start flex-column">
    <p className="text-white fs-4">{t("hizmetlerimiz-box")}</p>
    <ul className="text-white">
      <li>{t("hizmetler1")}</li>
      <li>{t("hizmetler2")}</li>
      <li>{t("hizmetler3")}</li>
      <li>{t("hizmetler4")}</li>
      <li>{t("hizmetler5")}</li>
      <li>{t("hizmetler6")}</li>
    </ul>
  </div>
  </div>
  )
}
