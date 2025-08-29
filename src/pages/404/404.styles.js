import styled from "styled-components";

export const NotFoundWrapper = styled.div`
  text-align: center;
  & h1 {
    font-weight: 700;
    font-style: Bold;
    font-size: 427px;
    margin: 18px;
    color: #45454590;
  }
  & p {
    margin-bottom: 74px;
  }
  @media (max-width: 768px) {
    & h1{
        font-size:170px;
    }
    & p{
        margin-bottom: 320px;
    }
  }
`;