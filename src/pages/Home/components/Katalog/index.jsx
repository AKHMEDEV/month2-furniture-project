import React from 'react'
import { KatalogWrapper, RouteToKatalog } from './Katalog.style'
import { Typography } from '../../../../components'
import Lyustra from "../../../../assets/images/LyustraInUaKit.svg"
import { Link } from 'react-router-dom'

const Katalog = ({ count = 1, images = [], texts = [] }) => {
  return (
      <div style={{ display: 'flex',flexWrap:'wrap', width:'100%', gap: '20px',alignItems:'center' }}>
        {Array.from({ length: count }).map((_, index) => (
          <Link  key={index} to={`/products/${index}`} style={{textDecoration:'none',color:'inherit',justifyContent:'center',maxWidth:'375px',width:'100%'}}>
              <KatalogWrapper>
            <RouteToKatalog>
              <Typography
                type="text"
                text={texts[index]?.title || `Люстрa`}
              />
              <Typography
                type="text2"
                text='От 540₽  →'
              />
            </RouteToKatalog>
            <img
              src={images[index] || Lyustra}
              alt={texts[index]?.title || `Люстра ${index + 1}`}
            />
          </KatalogWrapper>
          </Link>
        ))}
    </div>
  )
}

export default Katalog
