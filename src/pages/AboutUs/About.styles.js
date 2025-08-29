import styled from "styled-components";

export const AboutContainer = styled.div`
  margin-top:40px;
`;

export const LeftHeader = styled.div`
  width: 100%;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Breadcrumb = styled.div`
  font-family: Manrope;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Span = styled.span`
  color: #454545;
  font-weight: 500;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 64px;
  line-height: 1;
  color: #454545;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  & div:first-child {
    width: 100%;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatsContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
  background-color: #f2f2f2;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StatNumber = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

export const StatLabel = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export const AboutContent = styled.div`
  line-height: 1.6;
  width: 100%;
`;

export const AboutParagraph = styled.p`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 2rem;
  text-align: justify;
`;
