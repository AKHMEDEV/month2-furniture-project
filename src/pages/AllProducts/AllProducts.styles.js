import styled from "styled-components";

export const AllProductsWrapper = styled.div`
  margin: 40px auto;
  max-width: 1440px;
  padding: 0 100px;

  @media (max-width: 1200px) {
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const BreadcrumbWrapper = styled.div`
  margin-bottom: 40px;

  p {
    font-size: 14px;
    color: #6c6c6c;
  }

  .navlink {
    text-decoration: none;
    color: #6c6c6c;

    &:hover {
      color: #2f4da3;
    }
  }
`;
