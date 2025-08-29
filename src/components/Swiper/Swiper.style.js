import styled from "styled-components";

export const SwiperWrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 70px 0;
  box-sizing: border-box;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute;
    top: -40%;
    cursor: pointer;
    width: 70px;
    height: 40px;
    background-color: white;
    padding: 8px;
    border: 1px solid black;
    border-radius:100px;

    @media (max-width:756px) {
      display: none;
    }
  }
  .swiper-element{
    display: flex;
    justify-content: center;
    margin-bottom:10px;
    display: none;

    @media (max-width:756px) {
      display: flex;
    }
  }

  .swiper-element .swiper-pagination{
    position: absolute;
    display: flex;
    left: 48%;
  }

  .swiper-element .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background-color: #ccc;
    border-radius:50%;
  }

  .swiper-element .swiper-pagination-bullet-active {
    background-color: #000;
    box-shadow: 0 0 8px 4px rgba(170, 170, 170, 0.5);
  }

  .swiper-button-prev {
    left: 1030px;
  }

  .swiper-button-next {
    right: 10px;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  max-width: 280px;
  height: 100%;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`;
