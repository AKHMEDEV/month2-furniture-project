import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import Lyustra from '../../assets/images/LyustraInProduct.svg';
import {
  ProductDetailsWrapper,
  BreadcrumbWrapper,
  ProductMainSection,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  StockStatus,
  ProductDescription,
  QuantitySection,
  QuantityControls,
  QuantityButton,
  QuantityInput,
  ActionButtons,
  PrimaryButton,
  SecondaryButton,
  LoadingWrapper,
  ProductDetailsSection,
  DetailsTable,
  DiscountBadge,
} from './ProductDetails.styles';

const mockProduct = {
  id: 1,
  title: 'Встраиваемый светильник Novotech',
  article: '4335-1031',
  price: 435000,
  oldPrice: 625000,
  description: 'Пробиваемые мой гимназий подарки для всех централизованных металлов и обоих моделей. Один из самых легких раз входит навыкам наблюдения двух целей северы.',
  image: Lyustra,
  inStock: true,
  details: {
    color: 'Жесткий',
    year: '2018',
    wheelSize: '22,2',
    frameMaterial: 'Коробки',
    size: 'L',
    country: 'Швейцарии',
    manufacturer: 'Scott',
    fork: 'Schmalhe Rocket Run (KV) (21 1275) Master Read / Teelever Easy / Pavelbar compound',
    frame: 'Sosa Carbon / Mikro-measuren / Insanarium MDP / Каминовая рулевая труба / IBMZ / Пенсионная SDS / Дагенуты DFSL',
    connection: 'Ritchey WG3 700 Series; Carbon Link Package / 23 балла 900 Series; Carbon 28 SD5 / 34 балл',
    communication: 'Ritchey WG3 Strewe V3 Titanium site',
    components: 'Root Short SD Plus 3x III / дюжина DH63 3 режима / Storm OR valve / каминовая рулевая труба / Удалённые Блокировки, регулировав отходы / как Obama'
  }
};

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setProduct(mockProduct);
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) setQuantity(newQuantity);
  };

  if (loading) {
    return (
      <ProductDetailsWrapper>
        <LoadingWrapper>Загрузка товара...</LoadingWrapper>
      </ProductDetailsWrapper>
    );
  }

  if (!product) {
    return (
      <ProductDetailsWrapper>
        <h2>Товар не найден</h2>
      </ProductDetailsWrapper>
    );
  }

  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  };

  return (
    <div className="container">
      <ProductDetailsWrapper>
        <BreadcrumbWrapper>
          <p>
            <NavLink to="/" className="navlink">Главная</NavLink> &gt;
          </p>
        </BreadcrumbWrapper>

        <ProductMainSection>
          <ProductImage>
            <img src={product.image} alt={product.title} />
          </ProductImage>

          <ProductInfo>
            <ProductTitle>{product.title}</ProductTitle>

            <p className="article">Артикул: {product.article}</p>

            <StockStatus inStock={product.inStock}>
              <div className="status-indicator" />
              <span className="status-text">
                {product.inStock ? 'В наличии' : 'Нет в наличии'}
              </span>
            </StockStatus>

            <ProductPrice>
              <div className="price-container">
                <span className="current-price">{formatPrice(product.price)} ₽</span>
                {product.oldPrice && (
                  <>
                    <span className="old-price">{formatPrice(product.oldPrice)} ₽</span>

                  </>
                )}
              </div>
            </ProductPrice>

            <ProductDescription>
              <p>{product.description}</p>
            </ProductDescription>

            <QuantitySection>
              <span>Количество:</span>
              <QuantityControls>
                <QuantityButton onClick={() => handleQuantityChange(quantity - 1)} disabled={quantity <= 1}>−</QuantityButton>
                <QuantityInput
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  min="1"
                />
                <QuantityButton onClick={() => handleQuantityChange(quantity + 1)}>+</QuantityButton>
              </QuantityControls>
            </QuantitySection>

            <ActionButtons>
              <PrimaryButton disabled={!product.inStock}>В корзину</PrimaryButton>
              <SecondaryButton>♡</SecondaryButton>
            </ActionButtons>
          </ProductInfo>
        </ProductMainSection>

        <ProductDetailsSection>
          <h2>Характеристика</h2>
          <DetailsTable>
            <tbody>
              <tr>
                <td>Цвет</td>
                <td>{product.details.color}</td>
              </tr>
              <tr>
                <td>Год</td>
                <td>{product.details.year}</td>
              </tr>
              <tr>
                <td>Дюжину колеса</td>
                <td>{product.details.wheelSize}</td>
              </tr>
              <tr>
                <td>Материал рамы</td>
                <td>{product.details.frameMaterial}</td>
              </tr>
              <tr>
                <td>Реклам</td>
                <td>{product.details.size}</td>
              </tr>
              <tr>
                <td>Страна</td>
                <td>{product.details.country}</td>
              </tr>
              <tr>
                <td>Производитель</td>
                <td>{product.details.manufacturer}</td>
              </tr>
              <tr>
                <td>Поправка</td>
                <td>{product.details.fork}</td>
              </tr>
              <tr>
                <td>Рама</td>
                <td>{product.details.frame}</td>
              </tr>
              <tr>
                <td>Подсоединение IDIndex</td>
                <td>{product.details.connection}</td>
              </tr>
              <tr>
                <td>Связь</td>
                <td>{product.details.communication}</td>
              </tr>
              <tr>
                <td>Викл.</td>
                <td>{product.details.components}</td>
              </tr>
            </tbody>
          </DetailsTable>
        </ProductDetailsSection>
      </ProductDetailsWrapper>
    </div>
  );
};

export default ProductDetailsPage;