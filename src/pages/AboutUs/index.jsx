import React from "react";
import {
  AboutContainer,
  StatsContainer,
  StatItem,
  StatNumber,
  StatLabel,
  AboutContent,
  AboutParagraph,
  Breadcrumb,
  LeftHeader,
  Span,
  Title,
  ContentWrapper,
} from "./About.styles";
import { Link, NavLink } from "react-router-dom";
import { BlogWrapper, UnknownSection, Words } from "../Home/Home.styles";
import { Button, Typography } from "../../components";
import SwiperSlideComponent from "../../components/Swiper";
import { Blogs } from "../Home/components";

const About = () => {
  return (
    <div className="container">
      <AboutContainer>


        <ContentWrapper>
          <div>
            <LeftHeader>
              <Breadcrumb>
                <Link to="/" style={{ textDecoration: "none", color: "#454545" }}>
                  Главная
                </Link>
                &nbsp; &gt; &nbsp; <Span>О компании</Span>
              </Breadcrumb>
              <Title>О компании</Title>
            </LeftHeader>
            <StatsContainer>
              <StatItem>
                <StatNumber>170+</StatNumber>
                <StatLabel>Товаров</StatLabel>
              </StatItem>

              <StatItem>
                <StatNumber>1000+</StatNumber>
                <StatLabel>Довольных покупателей</StatLabel>
              </StatItem>

              <StatItem>
                <StatNumber>170+</StatNumber>
                <StatLabel>Городов доставки</StatLabel>
              </StatItem>
            </StatsContainer>

          </div>
          <AboutContent>
            <AboutParagraph>
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент <br />
              светильников для освещения вашего дома или офиса. У нас вы <br />
              найдете разнообразные модели светильников, от современных и <br />
              стильных до классических и элегантных. Мы предлагаем <br />
              качественные и надежные светильники от лучших <br />
              производителей, которые подарят вам комфорт и уют.
            </AboutParagraph>

            <AboutParagraph>
              Покупая светильники в нашем интернет-магазине, вы получаете <br />
              отличное соотношение цены и качества. Мы осуществляем <br />
              доставку по всей России, чтобы каждый клиент мог насладиться <br />
              прекрасным светом и удобством покупки онлайн. Обратитесь к <br />
              нам сегодня и превратите ваш дом в оазис тепла и света с <br />
              NORNLIGHT!
            </AboutParagraph>

            <AboutParagraph>
              Интернет-магазин NORNLIGHT предлагает широкий ассортимент <br />
              светильников для освещения вашего дома или офиса. У нас вы <br />
              найдете разнообразные модели светильников, от современных и <br />
              стильных до классических и элегантных. Мы предлагаем <br />
              качественные и надежные светильники от лучших <br />
              производителей, которые подарят вам комфорт и уют.
            </AboutParagraph>

            <AboutParagraph>
              Покупая светильники в нашем интернет-магазине, вы получаете <br />
              отличное соотношение цены и качества. Мы осуществляем <br />
              доставку по всей России, чтобы каждый клиент мог насладиться <br />
              прекрасным светом и удобством покупки онлайн. Обратитесь к <br />
              нам сегодня и превратите ваш дом в оазис тепла и света с <br />
              NORNLIGHT!
            </AboutParagraph>
          </AboutContent>

        </ContentWrapper>
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
      </AboutContainer>
    </div>
  );
};

export default About;
