import React from 'react';
import { NavLink } from 'react-router-dom';
import { CustomersWrapper, FirstPage, FooterLogoWrapper, FooterWrapper, GroupStyle, GroupWrapper, InfoWrapper, ProductWrapper, SecondPage } from './Footer.styles';

const Footer = () => {
    return (
        <div className='container'>
            <FooterWrapper>
                <InfoWrapper>
                    <FooterLogoWrapper>
                        <img src='/icons/NavbarIcons/logo.svg' alt="This is logo" />
                        <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p>NORNLIGHT</p>
                        </NavLink>
                    </FooterLogoWrapper>
                    <p>8 (800) 890-46-56</p>
                    <img src='/icons/FooterIcons/paymentIcon.svg' alt="This is payment methods icon" />
                    <NavLink to="/privacy" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p>Политика конфидециальности</p>
                    </NavLink>
                    <NavLink to="/agreement" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p>Пользовательское соглашение</p>
                    </NavLink>
                    <GroupWrapper>
                        <GroupStyle>
                            <p>VK</p>
                        </GroupStyle>
                        <GroupStyle>
                            <p>VK</p>
                        </GroupStyle>
                        <GroupStyle>
                            <p>VK</p>
                        </GroupStyle>
                    </GroupWrapper>
                </InfoWrapper>

                <CustomersWrapper>
                    <h3>Покупателям</h3>
                    <NavLink to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p className="insideLinkText" >О компании</p>
                    </NavLink>
                    <NavLink to="/delivery" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p className="insideLinkText" >Доставка и оплата</p>
                    </NavLink>
                    <NavLink to="/return" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p className="insideLinkText" >Возврат</p>
                    </NavLink>
                    <NavLink to="/garant" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p className="insideLinkText" >Гарантии</p>
                    </NavLink>
                    <NavLink to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p className="insideLinkText" >Контакты</p>
                    </NavLink>
                    <NavLink to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <p className="insideLinkText" >Блог</p>
                    </NavLink>
                </CustomersWrapper>

                <ProductWrapper>
                    <FirstPage>
                        <h3>Товары</h3>
                        <NavLink to="/products/chandeliers" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className="insideLinkText" >Люстры</p>
                        </NavLink>
                        <NavLink to="/products/lights" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className="insideLinkText" >Светильники</p>
                        </NavLink>
                        <NavLink to="/products/wall-lights" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className="insideLinkText" >Бра</p>
                        </NavLink>
                        <NavLink to="/products/floor-lamps" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className="insideLinkText" >Торшеры</p>
                        </NavLink>
                        <NavLink to="/products/components" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className="insideLinkText" >Комплектуюшие</p>
                        </NavLink>
                        <NavLink to="/products/table-lamps" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className="insideLinkText" >Настольные лампы</p>
                        </NavLink>
                    </FirstPage>
                    <SecondPage>
                        <NavLink to="/products/spots" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className="insideLinkText" >Споты</p>
                        </NavLink>
                        <NavLink to="/products/track-lights" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className="insideLinkText" >Трековые светильники</p>
                        </NavLink>
                        <NavLink to="/products/outdoor-lights" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className="insideLinkText" >Уличные светильники</p>
                        </NavLink>
                        <NavLink to="/products/technical-lights" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className="insideLinkText" >Технические светильники</p>
                        </NavLink>
                        <NavLink to="/products/led-strips" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <p className="insideLinkText" >Светодиодные ленты</p>
                        </NavLink>
                    </SecondPage>
                </ProductWrapper>
            </FooterWrapper>
        </div>
    );
};

export default Footer;