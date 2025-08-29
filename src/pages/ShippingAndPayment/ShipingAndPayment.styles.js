import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 50px 0;
`;

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const LeftHeader = styled.div`
  flex: 1;
  min-width: 220px;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Breadcrumb = styled.div`
  font-family: Manrope;
  font-weight: 500;
  text-align: left;
  margin-bottom: 20px;
`;

export const Span = styled.span`
  color: #000000;
  font-weight: 500;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-style: Bold;
  font-size: 64px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #454545;
  text-align: left;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const RightContent = styled.div`
  flex: 1;
`;

export const TextSection = styled.section`
  margin-bottom: 50px;
`;

export const Heading = styled.h2`
  font-family: Manrope;
  font-weight: 600;
  font-style: SemiBold;
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0%;
  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  font-size: 16px;
  color: #333;
  line-height: 1.6;
  margin: 0;

  a {
    color: #3461f2;
    text-decoration: underline;
  }

  strong {
    color: #000;
  }
`;

export const MapWrapper = styled.div`
  margin: 40px auto 0;
  width: 100%;
  height: 500px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 15px;
  }

  @media (max-width: 768px) {
    height: 300px;
  }
`;
