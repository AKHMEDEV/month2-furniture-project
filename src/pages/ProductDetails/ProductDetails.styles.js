import styled from 'styled-components';

export const ProductDetailsWrapper = styled.div`
  margin: 40px 260px;
  font-family: sans-serif;
  @media (max-width: 768px) {
    margin: 20px 16px;
  }
`;

export const BreadcrumbWrapper = styled.div`
  margin-bottom: 24px;
  p {
    font-size: 14px;
    color: #454545;
  }

  .navlink {
    color: #454545;
    text-decoration: none;
  }
`;

export const ProductMainSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductImage = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.06);
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    max-height: 440px;
    object-fit: contain;
  }
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  .article {
    font-size: 14px;
    color: #666;
    margin: -10px 0 0 0;
  }
`;

export const ProductTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const StockStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .status-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.inStock ? '#4CAF50' : '#f44336'};
  }
  .status-text {
    font-size: 14px;
    font-weight: 500;
    color: ${props => props.inStock ? '#4CAF50' : '#f44336'};
  }
`;

export const ProductPrice = styled.div`
  .price-container {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  
  .current-price {
    font-size: 28px;
    font-weight: 700;
    color: #000;
  }
  
  .old-price {
    font-size: 18px;
    color: #a2a2a2;
    text-decoration: line-through;
  }
`;

export const ProductDescription = styled.div`
  p {
    font-size: 16px;
    color: #444;
    line-height: 1.5;
    margin: 0;
  }
`;

export const QuantitySection = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const QuantityControls = styled.div`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 30px;
  overflow: hidden;
`;

export const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
  background: #fff;
  border: none;
  font-size: 20px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;

export const QuantityInput = styled.input`
  width: 50px;
  border: none;
  text-align: center;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 16px;
`;

export const PrimaryButton = styled.button`
  flex: 1;
  height: 50px;
  background: #454545;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const SecondaryButton = styled.button`
  width: 50px;
  height: 50px;
  background: white;
  color: #000;
  border: 1px solid #000;
  border-radius: 30px;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  font-size: 18px;
  color: #777;
`;

export const ProductDetailsSection = styled.section`
  margin-top: 60px;
  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #333;
  }
`;

export const DetailsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  tr {
    border-bottom: 1px solid #eee;
  }
  
  td {
    padding: 16px 0;
    vertical-align: top;
    
    &:first-child {
      width: 30%;
      font-weight: 500;
      color: #666;
    }
    
    &:last-child {
      color: #333;
    }
  }
`;

export const DiscountBadge = styled.span`
  background: #ff4444;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
`;