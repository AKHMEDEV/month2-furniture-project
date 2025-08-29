// src/pages/Home/HomePage.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Typography } from '../../components';
import { Blogs, Card, Katalog } from './components';
import ImgSwiper from './components/Swiper';
import StarEmblema from '../../assets/images/starEmblema.svg';
import {
  HomeWrapper,
  KatalogWrapper,
  Words,
  WhyNorlight,
  Services,
  SimpleService,
  CardsWrapper,
  UnknownSection,
  BlogWrapper
} from './Home.styles';
import SwiperSlideComponent from '../../components/Swiper';

const HomePage = () => {
  return (
    <div className="container">
      <HomeWrapper>
        <ImgSwiper />

        <KatalogWrapper>
          <Words>
            <Typography type="h2" text="Каталог" />
            <NavLink to="/catalog" style={{ textDecoration: 'none' }}>
              <Button>Весь каталог ➜</Button>
            </NavLink>
          </Words>
          <Katalog count={6} />
        </KatalogWrapper>

        <WhyNorlight>
          <Words>
            <Typography type="h2" text="Почему NORNLIGHT?" />
            <NavLink to="/about" style={{ textDecoration: 'none' }}>
              <Button>О компании ➜</Button>
            </NavLink>
          </Words>
          <Services>
            {[1,2,3,4].map((i) => (
              <SimpleService key={i}>
                <img src={StarEmblema} alt="Эмблема" />
                <Typography type="text" text="Только проверенные бренды" />
                <Typography
                  type="text2"
                  text="Бренды, проверенные временем и качеством"
                />
              </SimpleService>
            ))}
          </Services>
        </WhyNorlight>

        <CardsWrapper>
          <Words>
            <Typography type="h2" text="Популярные товары" />
            <NavLink to="/products" style={{ textDecoration: 'none' }}>
              <Button>Все товары ➜</Button>
            </NavLink>
          </Words>
          <Card count={4} />
          <Card count={4}/>
        </CardsWrapper>

        <UnknownSection>
          <Words style={{marginBottom:'30px'}}>
            <Typography type="h2" text="Только проверенные бренды" />
          </Words>
          <SwiperSlideComponent/>
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
      </HomeWrapper>
    </div>
  );
};

export default HomePage;
