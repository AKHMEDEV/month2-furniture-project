import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography } from '../../components';
import { Card } from '../Home/components';
import { AllProductsWrapper, BreadcrumbWrapper } from './AllProducts.styles';
import { CardsWrapper, Words } from '../Home/Home.styles';

const AllProductsPage = () => {
  return (
    <div className="container">
      <AllProductsWrapper>
        <BreadcrumbWrapper>
          <p>
            <NavLink to="/" className="navlink">Главная</NavLink> &gt;
          </p>
        </BreadcrumbWrapper>

        <CardsWrapper>
          <Words>
            <Typography type="h2" text="Популярные товары" />
          </Words>
          <Card count={4} />
          <Card count={4} />
        </CardsWrapper>
      </AllProductsWrapper>
    </div>
  );
};

export default AllProductsPage;
