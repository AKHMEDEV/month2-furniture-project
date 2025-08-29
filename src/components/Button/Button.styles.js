import styled from "styled-components";

export const NormalButton = styled.button`
  width: 220px;
  height: 50px;
  border: 1px solid #454545;
  background-color: #ffffff;
  border-radius: 100px;
  color: #454545;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    border: 1px solid #ffffff;
    background-color: #454545;
    color: #ffffff;
  }
  &:active {
    border: 1px solid #ffffff;
    background-color: #454545;
    color: #ffffff;
  }
`;

export const CatalogDarkButton = styled.button`
  width: 153px;
  height: 50px;
  border: 1px solid #ffffff;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  cursor: pointer;
  transition: 0.5s;
  background-color: #454545;
  color: #ffffff;
  &:hover {
    transform:scale(1.1);
  }
`;

export const CatalogLightButton = styled.button`
  width: 153px;
  height: 50px;
  border: 1px solid #454545;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.5s;
  background-color: #ffffff;
  &:hover {
    border: 1px solid #ffffff;
    background-color: #454545;
    color: #ffffff;
  }
  &:active {
    border: 1px solid #ffffff;
    background-color: #454545;
    color: #ffffff;
  }
`;

export const SwiperLightButton = styled.button`
  width: 39px;
  height: 26px;
  border: 1px solid #454545;
  background-color: #ffffff;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    border: 1px solid #ffffff;
    background-color: #454545;
    color: #ffffff;
  }
  &:active {
    border: 1px solid #ffffff;
    background-color: #454545;
    color: #ffffff;
  }
`;

export const SwiperDarkButton = styled.button`
  width: 39px;
  height: 26px;
  border: 1px solid #ffffff;
  background-color: #454545;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    border: 1px solid #454545;
    background-color: #ffffff;
    color: #454545;
  }
  &:active {
    border: 1px solid #454545;
    background-color: #ffffff;
    color: #454545;
  }
`;

export const BasketLightButton = styled.button`
  width: 55px;
  height: 33px;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.5s;
  background-color: #2f4da3;
`;

export const BasketDarkButton = styled.button`
  width: 55px;
  height: 33px;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.5s;
  background-color: #223c86;
`;
