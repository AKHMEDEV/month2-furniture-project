import React from 'react'
import { CatalogWrapper, LowerCatalog, RouteToKatalog, KatalogWrapperComp } from './Catalog.style'
import { BlogWrapper, KatalogWrapper, UnknownSection, Words } from '../Home/Home.styles'
import { Blogs, Katalog } from '../Home/components'
import { Button, Typography } from '../../components'
import { NavLink, Link } from 'react-router-dom'
import SwiperSlideComponent from '../../components/Swiper'
import CabelImg from '../../assets/images/cabel.svg'

const CatalogPage = () => {
  return (
    <div className="container">
      <CatalogWrapper>
        <div style={{ display: 'flex', alignItems: 'center', width:'86%', marginBottom: 0 }}>
          <Link to="/" style={{ textDecoration: "none", color: "#454545" }}>
            Главная
          </Link>
          <Typography type='text' text=' > Каталог' />
        </div>

        <KatalogWrapper style={{ marginTop: 0 }}>
          <Words style={{ marginTop: 0 }}>
            <Typography type="h2" text="Каталог" styles={{ marginTop: 0 }} />
          </Words>
          <Katalog count={9} />
        </KatalogWrapper>

        <LowerCatalog>
          {Array.from({ length: 2 }).map((_, index) => (
            <KatalogWrapperComp key={index}>
              <RouteToKatalog>
                <Typography type="text" text={`Люстрa`} />
                <Typography type="text2" text="От 540₽  →" />
              </RouteToKatalog>
              <img src={CabelImg} alt="" />
            </KatalogWrapperComp>
          ))}
        </LowerCatalog>

        <UnknownSection>
          <Words style={{ marginBottom: '30px' }}>
            <Typography type="h2" text="Только проверенные бренды" />
          </Words>
          <SwiperSlideComponent />
        </UnknownSection>

        <BlogWrapper>
          <Words>
            <Typography type="h2" text="Блог" />
            <NavLink to="/blog" style={{ textDecoration: 'none' }}>
              <Button>Перейти в блог ➜</Button>
            </NavLink>
          </Words>
          <Blogs />
        </BlogWrapper>
      </CatalogWrapper>
    </div>
  )
}

export default CatalogPage
