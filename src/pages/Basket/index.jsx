// BasketPage.jsx
import React, { useState } from "react";
import {
  Container,
  Breadcrumb,
  Title,
  Table,
  TableRow,
  TableHeader,
  TableData,
  ProductImage,
  ProductName,
  QuantityWrapper,
  QuantityButton,
  QuantityValue,
  TrashIcon,
  Section,
  SectionTitle,
  InputGroup,
  Input,
  Textarea,
  PaymentInfo,
  PaymentRow,
  TotalPrice,
  BuyButton,
  FooterText,
  StyledTableWrapper,
  QuantityButtonPlus,
  BuyWrapper,
  ProductImageWrapaer,
} from "./Basket.styles";

import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

import NimadirImage from "../../assets/images/LyustraInProduct.svg";

const BasketPage = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Встраиваемый Светильник Novotech",
      description:
        "Светильник RADUGA COMBO XS Промышленное Освещение: 50ВТ, 230В; S4; XS;",
      article: "RAD-COMBO-50/XXX/230V/XXX/S4XS",
      price: 6339,
      quantity: 1,
      image: NimadirImage,
    },
    {
      id: 2,
      name: "Встраиваемый Светильник Novotech",
      description:
        "Светильник RADUGA COMBO XS Промышленное Освещение: 50ВТ, 230В; S4; XS;",
      article: "RAD-COMBO-50/XXX/230V/XXX/S4XS",
      price: 6339,
      quantity: 1,
      image: NimadirImage,
    },
  ]);

  const updateQuantity = (id, amount) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity + amount >= 1
          ? { ...item, quantity: item.quantity + amount }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const shipping = 500;
  const total = subtotal + shipping;

  return (
    <Container>
      <Breadcrumb>
        Главная &gt; Каталог &gt;{" "}
        <span style={{ color: "black", fontWeight: "bold" }}>Корзина</span>
        <h1 style={{ fontSize: "64px" }}>Корзина</h1>
      </Breadcrumb>
      <StyledTableWrapper>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Фото</TableHeader>
              <TableHeader>Товары</TableHeader>
              <TableHeader>Описание</TableHeader>
              <TableHeader>Артикул</TableHeader>
              <TableHeader>Количество</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableData>
                    <ProductImage src={item.image} />
                </TableData>
                <TableData>
                  <ProductName>{item.name}</ProductName>
                </TableData>
                <TableData>{item.description}</TableData>
                <TableData>{item.article}</TableData>
                <TableData>
                  <QuantityWrapper>
                    <QuantityButton onClick={() => updateQuantity(item.id, -1)}>
                      <FiMinus />
                    </QuantityButton>
                    <QuantityValue>{item.quantity}</QuantityValue>
                    <QuantityButtonPlus
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      <FiPlus />
                    </QuantityButtonPlus>
                    <TrashIcon onClick={() => removeItem(item.id)}>
                      <FiTrash2 />
                    </TrashIcon>
                  </QuantityWrapper>
                </TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </StyledTableWrapper>
      <Section>
        <SectionTitle>Оформление</SectionTitle>
        <InputGroup>
          <Input placeholder="ФИО" />
          <Input placeholder="Телефон" />
          <Input placeholder="Электронная Почта" />
        </InputGroup>
        <hr />
        <SectionTitle>Доставка</SectionTitle>
        <Input placeholder="Адрес доставки" />
        <Textarea placeholder="Комментарий" />
      </Section>

      <Section>
        <SectionTitle>Оплата</SectionTitle>
        <PaymentInfo>
          <PaymentRow>
            <span>Товары</span>
            <span>{subtotal.toLocaleString("ru-RU").replace(",", " ")}₽</span>
          </PaymentRow>
          <PaymentRow>
            <span>Доставка</span>
            <span>580₽</span>
          </PaymentRow>
          <TotalPrice>
            {(subtotal + 580).toLocaleString("ru-RU").replace(",", " ")}₽
          </TotalPrice>
        </PaymentInfo>
        <BuyWrapper>
          <BuyButton>Купить</BuyButton>
          <input type="checkbox" id="agreement" />
          <label htmlFor="agreement">
            Я согласен на обработку моих персональных данных
          </label>
        </BuyWrapper>
      </Section>
    </Container>
  );
};

export default BasketPage;
