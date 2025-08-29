"use client"

import { useState } from "react"
import {
  BottomWrapper,
  BoxWrapper,
  CompanyName,
  ContactWrapper,
  DropdownMenu,
  HeaderWrapper,
  IconStyle,
  InsideMobileWrapper,
  LinkWrapper,
  LogoWrapper,
  MobileIcon,
  MobileLeftSide,
  MobileRightSide,
  MobileWrapper,
  NavbarWrapper,
  TopWrapper,
} from "./Navbar.styles"
import { NavLink, useNavigate } from "react-router-dom"
import { CatalogDarkButton } from "../../components/Button/Button.styles"
import { H3, Text, Text2 } from "../../components/Typography/Typography.styles"
import { StyledInput } from "../../components/Input/Input.styles"
import CatalogSvg from "../../assets/images/Catalog"

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev)

  const handleCatalogClick = () => {
    navigate("/catalog")
    setIsDropdownOpen(false)
  }

  return (
    <div className="container">
      <NavbarWrapper>
        <TopWrapper>
          <LinkWrapper>
            <NavLink className="LinkStyleOff" to="/about">
              <Text2>О компании</Text2>
            </NavLink>
            <NavLink className="LinkStyleOff" to="/delivery">
              <Text2>Доставка и оплата</Text2>
            </NavLink>
            <NavLink className="LinkStyleOff" to="/return">
              <Text2>Возврат</Text2>
            </NavLink>
            <NavLink className="LinkStyleOff" to="/garant">
              <Text2>Гарантии</Text2>
            </NavLink>
            <NavLink className="LinkStyleOff" to="/contact">
              <Text2>Контакты</Text2>
            </NavLink>
            <NavLink className="LinkStyleOff" to="/blog">
              <Text2>Блог</Text2>
            </NavLink>
          </LinkWrapper>
          <ContactWrapper>
            <Text>8 (800) 890-46-56</Text>
            <Text2>Заказать звонок</Text2>
          </ContactWrapper>
        </TopWrapper>

        <BottomWrapper>
          <LogoWrapper>
            <img src="/icons/NavbarIcons/logo.svg" alt="logo" />
            <NavLink to="/" className="logo">
              <CompanyName>NORNLIGHT</CompanyName>
            </NavLink>
          </LogoWrapper>

          <HeaderWrapper>
            <CatalogDarkButton onClick={handleCatalogClick} style={{ cursor: "pointer" }}>
              <CatalogSvg />
              Каталог
            </CatalogDarkButton>
            <StyledInput placeholder="Поиск по товарам" type="text" />
            <NavLink to="/favorite" style={{ color: "black", textDecoration: "none" }}>
              <BoxWrapper>
                <IconStyle>
                  <img src="/icons/NavbarIcons/like.svg" alt="like" />
                </IconStyle>
                <p>Избранное</p>
              </BoxWrapper>
            </NavLink>
            <BoxWrapper>
              <IconStyle>
                <img src="/icons/NavbarIcons/compare.svg" alt="compare" />
              </IconStyle>
              <p>Сравнение</p>
            </BoxWrapper>
            <NavLink to="/basket" style={{ color: "black", textDecoration: "none" }}>
              <BoxWrapper>
                <IconStyle>
                  <img src="/icons/NavbarIcons/cart.svg" alt="cart" />
                </IconStyle>
                <p>Корзина</p>
              </BoxWrapper>
            </NavLink>
          </HeaderWrapper>
        </BottomWrapper>

        <MobileWrapper>
          <InsideMobileWrapper>
            <MobileRightSide>
              <MobileIcon onClick={toggleDropdown}>
                <img src="/icons/NavbarIcons/mobileIcon.svg" alt="mobile icon" />
              </MobileIcon>
              <LogoWrapper>
                <img src="/icons/NavbarIcons/logo.svg" alt="logo" />
                <NavLink to="/" className="logo">
                  <H3>NORNLIGHT</H3>
                </NavLink>
              </LogoWrapper>
            </MobileRightSide>
            <MobileLeftSide>
              <NavLink to="/favorite" style={{ color: "black", textDecoration: "none" }}>
                <BoxWrapper>
                  <IconStyle>
                    <img src="/icons/NavbarIcons/like.svg" alt="like" />
                  </IconStyle>
                </BoxWrapper>
              </NavLink>
              <BoxWrapper>
                <IconStyle>
                  <img src="/icons/NavbarIcons/compare.svg" alt="compare" />
                </IconStyle>
              </BoxWrapper>
              <NavLink to="/basket" style={{ color: "black", textDecoration: "none" }}>
                <BoxWrapper>
                  <IconStyle>
                    <img src="/icons/NavbarIcons/cart.svg" alt="cart" />
                  </IconStyle>
                </BoxWrapper>
              </NavLink>
            </MobileLeftSide>
          </InsideMobileWrapper>
          <StyledInput placeholder="Поиск по товарам" type="text" />
          {isDropdownOpen && (
            <DropdownMenu>
              <LinkWrapper className="DropLinks">
                <NavLink to="/about" className="DropLink" onClick={toggleDropdown}>
                  О компании
                </NavLink>
                <NavLink to="/delivery" className="DropLink" onClick={toggleDropdown}>
                  Доставка и оплата
                </NavLink>
                <NavLink to="/return" className="DropLink" onClick={toggleDropdown}>
                  Возврат
                </NavLink>
                <NavLink to="/garant" className="DropLink" onClick={toggleDropdown}>
                  Гарантии
                </NavLink>
                <NavLink to="/contact" className="DropLink" onClick={toggleDropdown}>
                  Контакты
                </NavLink>
                <NavLink to="/blog" className="DropLink" onClick={toggleDropdown}>
                  Блог
                </NavLink>
              </LinkWrapper>
              <CatalogDarkButton onClick={handleCatalogClick} style={{ cursor: "pointer" }}>
                <CatalogSvg />
                Каталог
              </CatalogDarkButton>
              <ContactWrapper>
                <p>8 (800) 890-46-56</p>
                <p>Заказать звонок</p>
              </ContactWrapper>
            </DropdownMenu>
          )}
        </MobileWrapper>
      </NavbarWrapper>
    </div>
  )
}

export default Navbar
