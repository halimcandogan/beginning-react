import React from 'react'
import { useTranslation } from 'react-i18next';
import Blogbutton from './Blogbutton';

export default function Blogcard({image, title, context}) {
  const {t} = useTranslation();
  return (
    <div>
          <div className="card border-0 blg-hvr">
            <img src={image} className="card-img-top " style={{height: '220px'}} alt="..." />
            <div className="card-body border">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{context}</p>
              <Blogbutton />
            </div>
          </div>
    </div>
  )
}
