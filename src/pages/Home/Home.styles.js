// src/pages/Home/Home.styles.js
import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;    
  width: 100%;
  gap: 80px;    
  padding: 40px 30px; 
`;

export const KatalogWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  width: 80vw;
  max-width: 1200px;
  gap: 20px;
`;

export const WhyNorlight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 1200px;
  gap: 20px;
`;

export const Services = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

export const SimpleService = styled.div`
  width: 280px;
  padding: 20px;
  border: 1px solid rgba(217, 217, 217, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  & img {
    width: 80px;
    height: 80px;
    margin-bottom: 50px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  max-width: 1200px;
  gap: 20px;
`;

export const UnknownSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  max-width: 1200px;
`;

export const BlogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  max-width: 1200px;
  gap: 20px;
`;

export const Words = styled.div`
  width: 100%;
  display: flex;
  align-items: center;       
  justify-content: space-between;
  flex-wrap: wrap;               
  gap: 16px;
  margin-block: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
