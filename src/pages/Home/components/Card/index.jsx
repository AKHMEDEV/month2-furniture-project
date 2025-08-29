import React from 'react';
import { Link } from 'react-router-dom';
import Lyustra from '../../../../assets/images/LyustraInProduct.svg';
import BlackCart from '../../../../assets/images/blackCart.svg';
import { Typography } from '../../../../components';
import { CardWrapper, Wrapper } from './Card.style';

const Card = ({ count = 1 }) => {
  return (
    <Wrapper style={{ display: 'flex' }}>
      {Array.from({ length: count }).map((_, index) => (
        <Link
          to="/product/1"
          key={index}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <CardWrapper>
            <div>
              <img src={Lyustra} alt={`Product ${index + 1}`} />
              <img
                src="/icons/NavbarIcons/like.svg"
                alt="like"
                style={{ cursor: 'pointer' }}
              />
            </div>
            <Typography type="text" text="Встраиваемый светильник Novotech" />
            <Typography
              styles={{ textDecoration: 'line-through' }}
              type="menu2"
              text="7 000₽"
            />
            <div>
              <Typography type="text" text="6 399₽" />
              <img
                src={BlackCart}
                alt="Add to cart"
                style={{ cursor: 'pointer' }}
              />
            </div>
          </CardWrapper>
        </Link>
      ))}
    </Wrapper>
  );
};

export default Card;
